import express, { Request, Response } from "express";
import { protect, authorize } from "../middleware/auth";
import { uploadDoc, handleUploadError } from "../middleware/upload";
import { uploadToCloudinary, deleteFromCloudinary, getPublicIdFromUrl } from "../utils/cloudinary";
import logger from "../utils/logger";
import ScheduleFile from "../models/ScheduleFile";
import { AuthRequest } from "../types";

const router = express.Router();

// @desc    Get current schedule file
// @route   GET /api/schedule-file
// @access  Public
router.get("/", async (req: Request, res: Response) => {
    try {
        const scheduleFile = await ScheduleFile.findOne().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: scheduleFile,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            error: error.message || "Server error",
        });
    }
});

// @desc    Upload/Replace schedule file
// @route   POST /api/schedule-file
// @access  Private (Admin only)
router.post(
    "/",
    protect,
    authorize("admin"),
    uploadDoc,
    handleUploadError,
    async (req: AuthRequest, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({ success: false, error: "No file uploaded" });
            }

            // Find existing file to delete from Cloudinary
            const existingFile = await ScheduleFile.findOne();
            if (existingFile) {
                if (existingFile.fileUrl && existingFile.fileUrl.includes("cloudinary")) {
                    const publicId = getPublicIdFromUrl(existingFile.fileUrl);
                    if (publicId) await deleteFromCloudinary(publicId, "raw");
                }
                // Delete old record
                await ScheduleFile.deleteOne({ _id: existingFile._id });
            }

            // Upload to Cloudinary (using 'raw' for documents like PDF/XLSX)
            const result = await uploadToCloudinary(req.file.buffer, "schedules", "raw");
            const fileUrl = result.secure_url;

            const scheduleFile = await ScheduleFile.create({
                fileName: req.file.originalname,
                fileUrl,
                fileType: req.file.mimetype,
                uploadedBy: req.user!._id,
            });

            return res.status(201).json({ success: true, data: scheduleFile });
        } catch (error: any) {
            logger.error(`ScheduleFile POST error: ${error.message}`);
            return res.status(500).json({
                success: false,
                error: error.message || "Server error",
            });
        }
    }
);

export default router;

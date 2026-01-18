import multer from 'multer';
import { Request } from 'express';

// Local uploads directory logic removed (now using Cloudinary)

// Configure storage to use memory instead of disk
const storage = multer.memoryStorage();

// File filter function
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedImageTypes = process.env.ALLOWED_IMAGE_TYPES?.split(',') || ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  const allowedPdfTypes = process.env.ALLOWED_PDF_TYPES?.split(',') || ['application/pdf'];
  const allowedDocTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  const allowedTypes = [...allowedImageTypes, ...allowedPdfTypes, ...allowedDocTypes];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`));
  }
};

// Configure multer
const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '20971520'), // Increased to 20MB for cloud
  },
  fileFilter: fileFilter
});

// Upload middleware for single image
export const uploadSingle = upload.single('image');

// Upload middleware for single PDF
export const uploadPdf = upload.single('pdf');

// Upload middleware for single Document (Schedule)
export const uploadDoc = upload.single('file');

// Upload middleware for multiple images
export const uploadMultiple = upload.array('images', 10);

// Error handling middleware for multer
export const handleUploadError = (error: any, req: Request, res: any, next: any) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File size too large. Maximum size is 10MB.'
      });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        error: 'Too many files. Maximum 10 files allowed.'
      });
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        success: false,
        error: 'Unexpected file field.'
      });
    }
  }

  if (error.message) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }

  next(error);
};

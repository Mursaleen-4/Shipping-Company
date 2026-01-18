import { v2 as cloudinary } from 'cloudinary';
import logger from './logger';

// Cloudinary will automatically use the CLOUDINARY_URL environment variable if present.
// Otherwise, we can configure it manually if the separate keys are provided.
if (!process.env.CLOUDINARY_URL && (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET)) {
    console.warn('Cloudinary environment variables are missing. File uploads may fail.');
}

if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
}

/**
 * Upload a file buffer to Cloudinary
 * @param fileBuffer - The buffer of the file to upload
 * @param folder - Cloudinary folder name
 * @param resourceType - 'image', 'video', or 'raw' (for PDFs/Docs)
 * @returns Promise with upload result
 */
export const uploadToCloudinary = (
    fileBuffer: Buffer,
    folder: string,
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto'
): Promise<any> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: `shipping-app/${folder}`,
                resource_type: resourceType,
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        uploadStream.end(fileBuffer);
    });
};

/**
 * Delete a file from Cloudinary using its public ID
 * @param publicId - The public ID of the file to delete
 * @param resourceType - 'image', 'video', or 'raw'
 */
export const deleteFromCloudinary = async (
    publicId: string,
    resourceType: 'image' | 'video' | 'raw' = 'image'
): Promise<any> => {
    try {
        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
        });
        return result;
    } catch (error) {
        logger.error(`Cloudinary delete error: ${error}`);
        throw error;
    }
};

/**
 * Extract public ID from a Cloudinary URL
 * @param url - The Cloudinary URL
 * @returns The public ID
 */
export const getPublicIdFromUrl = (url: string): string | null => {
    try {
        // Example URL: https://res.cloudinary.com/cloudname/image/upload/v12345/shipping-app/folder/public_id.jpg
        const parts = url.split('/');
        const fileNameWithExtension = parts.pop();
        if (!fileNameWithExtension) return null;

        const publicIdWithoutExtension = fileNameWithExtension.split('.')[0];

        // Find the index of our root folder
        const rootIndex = parts.indexOf('shipping-app');
        if (rootIndex === -1) return publicIdWithoutExtension;

        // Join everything from root folder to public ID
        const remainingParts = parts.slice(rootIndex);
        return [...remainingParts, publicIdWithoutExtension].join('/');
    } catch (error) {
        return null;
    }
};

export default cloudinary;

import User from '../models/User';
import logger from "./logger";

export default async function seedAdmin(): Promise<void> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      logger.warn('seedAdmin: ADMIN_EMAIL or ADMIN_PASSWORD not set - skipping admin seeding');
      return;
    }

    const email = adminEmail.toLowerCase();
    const existing = await User.findOne({ email });

    if (existing) {
      if (existing.role !== 'admin') {
        existing.role = 'admin';
        await existing.save();
        logger.info(`seedAdmin: promoted existing user ${email} to admin`);
      } else {
        logger.info(`seedAdmin: admin ${email} already exists`);
      }
      return;
    }

    const user = await User.create({
      email,
      password: adminPassword,
      role: 'admin'
    });

    logger.info(`seedAdmin: created admin ${user.email}`);
  } catch (error) {
    logger.error(`seedAdmin error: ${error}`);
  }
}
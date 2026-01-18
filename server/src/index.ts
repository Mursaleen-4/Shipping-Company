import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load env as early as possible
dotenv.config();

import { errorHandler } from "./middleware/errorHandler";
import { notFound } from "./middleware/notFound";
import logger from "./utils/logger";
import morgan from "morgan";

// Routes
import authRoutes from "./routes/auth";
import galleryRoutes from "./routes/gallery";
import blogRoutes from "./routes/blogs";
import categoriesRoutes from "./routes/categories";
import tariffRoutes from "./routes/tariffs";
import tariffPageRoutes from "./routes/tariffPage";
import exchangeRatesRoutes from "./routes/exchangeRates";
import contactRoutes from "./routes/contact";
import configRoutes from "./routes/config";
import scheduleFileRoutes from "./routes/scheduleFile";
import downloadDocsRoutes from "./routes/downloadDocs";

import seedAdmin from "./utils/seedAdmin";

// Create app
const app = express();

/* ------------------------- DATABASE ------------------------- */
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not defined");
  }

  await mongoose.connect(process.env.MONGO_URI, {
    maxPoolSize: 10,
    connectTimeoutMS: 30000,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    retryWrites: true,
  });

  logger.info("✅ MongoDB connected");
};

/* ------------------------- MIDDLEWARE ------------------------- */
app.use(helmet({
  contentSecurityPolicy: false, // temporarily disable for debugging assets
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// HTTP request logging
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Serve static assets if needed, but not local uploads anymore
// app.use("/uploads", ...) removed in favor of Cloudinary

/* ------------------------- ROUTES ------------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/tariffs", tariffRoutes);
app.use("/api/tariffPage", tariffPageRoutes);
app.use("/api/exchange-rates", exchangeRatesRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/config", configRoutes);
app.use("/api/schedule-file", scheduleFileRoutes);
app.use("/api/download-docs", downloadDocsRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", time: new Date() });
});

/* ------------------------- FRONTEND SERVING ------------------------- */
// More robust path resolution for cPanel/Production
const possiblePaths = [
  path.join(__dirname, "..", "..", "client", "dist"),
  path.join(process.cwd(), "..", "client", "dist"),
  path.join(process.cwd(), "public"),
];

let clientBuildPath = possiblePaths[0];

// Simple check to find which path actually contains index.html
import fs from "fs";
for (const p of possiblePaths) {
  if (fs.existsSync(path.join(p, "index.html"))) {
    clientBuildPath = p;
    logger.info(`📍 Found frontend build at: ${clientBuildPath}`);
    break;
  }
}

app.use(express.static(clientBuildPath));

// Catch-all route to serve the React index.html
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }

  const indexPath = path.join(clientBuildPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    logger.warn(`⚠️ index.html not found at ${indexPath}`);
    next();
  }
});

app.use(notFound);
app.use(errorHandler);

/* ------------------------- INIT ------------------------- */
const PORT = process.env.PORT || 5000;

connectDB()
  .then(async () => {
    await seedAdmin();
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(`❌ Startup error: ${err}`);
    process.exit(1);
  });

export default app;


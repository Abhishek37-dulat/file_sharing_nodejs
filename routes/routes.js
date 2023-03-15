import express from "express";
import {
  uploadImage,
  downloadImage,
  sampleData,
} from "../controller/image_controller.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.get("/", sampleData);
router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

export default router;

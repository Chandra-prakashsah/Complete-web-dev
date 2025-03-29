import express from "express";
import { createJob, getAllJobs, deleteJob, updateJob, getJobById } from "../controllers/job.controller.js"
import { validateIdParam, validateJobInput } from "../middlewares/validationHandler.js";
const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id",validateIdParam, getJobById);
router.post("/",validateJobInput, createJob);
router.put("/:id",validateJobInput,validateIdParam, updateJob);
router.delete("/:id",validateIdParam, deleteJob);
export default router
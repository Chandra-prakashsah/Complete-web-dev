import {  BadRequestError } from "../errors/customError.js";
import jobModel from "../models/job.model.js";
import {StatusCodes} from 'http-status-codes'
const createJob = async (req, res) => {
    const { company, position } = req.body
    if (!company || !position) {
        throw new BadRequestError("company and position required")
    }
    const result = await jobModel.create({ company, position });
    res.status(StatusCodes.CREATED).json({ message: "job created", job: result })
}

const getAllJobs = async (req, res) => {
    const result = await jobModel.find({});
    res.status(StatusCodes.OK).json({ jobs: result })
}

const getJobById = async (req, res) => {
    const { id } = req.params;
    const result = await jobModel.findById(id);
    res.status(StatusCodes.OK).json({ job: result })
}

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { company, position } = req.body;
    const result = await jobModel.findByIdAndUpdate(id, { company, position }, { new: true });
    res.status(StatusCodes.OK).json({ message: "job updated", job: result })
}

const deleteJob = async (req, res) => {
    const { id } = req.params;
    const result = await jobModel.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ message: "job deleted" })
}

export {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
}
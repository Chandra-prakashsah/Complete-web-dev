import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
    const customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "something went wrong try again later"
    }
    if (err.name === "ValidationError") {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = Object.values(err.errors).map((item) => item.message).join(",");
    }
    if (err.code && err.code === 11000) {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = `duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
}

export default errorHandler
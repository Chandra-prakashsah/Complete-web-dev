import { UnAuthenticatedError, UnAuthorizedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser=(req,res,next)=>{
    const {token}=req.cookies;
    if(!token) throw new UnAuthenticatedError("Authentication invalid!");
    try {
        const {userId,role}=verifyJWT(token);
        req.user={userId,role};
        next();
    } catch (error) {
        throw new UnAuthenticatedError("Authentication invalid!")
    }
}

export const authorizedPermission=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new UnAuthorizedError("Unautorized to access this route")
        }
        next();

    }
}
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import Jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

/**
 * this middleware will verify if user is present or not by verifying jwt
 * 1. get user details from cookie
 * 2. verify if we got the detail
 * 3. decrypt user detail from cookie(using jwt)
 * 4. verify the user id from db(User.findById). if user not present send invalid accessToken message
 * 5. now send this user in req(req.user) and pass the handler to next()
 */

export const verifyJWT = asyncHandler(async (req, _, next) => { // res: not used so instead of that underscore('_') can be written
    try {
        console.log(req);
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        console.log(token);

        if (!token) {
            throw new ApiError(401, "UnAuthorized request");
        }

        const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = User.findById(decodedToken._id).select("-password -refreshToken");

        if (!user) {
            // next video:some discussion about frontend!!!
            throw new ApiError(401, "Invalid Access Token");
        };

        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid access token")
    }
})
import {asyncHandler} from "../utils/asyncHandler.js"
import ApiError from "../utils/apiError.js"
import {User} from "../models/user.model.js"

const registerUser = asyncHandler( async(req, res) => {
    //get user detail from frontend
    //validation - not empty
    // check if user already exists: username or email
    //check for images
    //check for avatar
    //upload them to cloudinary, avatar
    //create user object - create enrty in db
    //remove password and refresh token from response
    //check for user creation 
    //return res

    const {fullName, email, username, password} = req.body
    console.log("email: ", email);

    if(
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
        $or:[{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User with email and username already exists");
    }
    

})


export {registerUser}
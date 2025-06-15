import {asyncHandler} from "../utils/asyncHandler.js"

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
    

})


export {registerUser}
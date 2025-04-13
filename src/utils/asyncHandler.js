
//method-1
const asyncHandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error)) //catch any error that occurs in the request handler
    }
}



export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = () = () => {}
// const asyncHandler = (fn) => async() => {}

//method-2 
// This is a higher order function that takes a function as an argument and returns a new function that handles errors
// in async functions. It is used to wrap async route handlers in Express.js to avoid repetitive try-catch blocks.

// const asyncHandler = (fn) = async(req, res, next) => {     //higher order function
//     try {
//         await fn(req, res, next) //await the function passed to it
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         })
//     }
// }
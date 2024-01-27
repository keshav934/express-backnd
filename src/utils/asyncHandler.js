const asyncHandler = (requrestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requrestHandler(req, res, next))
            .catch((err) => next(err))
    }
};

export { asyncHandler };











/*  this is another method of using the above method */
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }



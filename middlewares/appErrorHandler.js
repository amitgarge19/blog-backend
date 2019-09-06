const response = require('./../libs/responseLib');

let errorHandler = (err, req, res, next) => {
    console.log("application error handler called");
    console.log(err);
    let apiResponse = response.generate(true, 'Some error handled at global level.', 500, null);
    res.send(apiResponse)
} //end request ip logger function

let notFoundHandler = (req, res, next) => {
    let apiResponse = response.generate(true, "Global not found hendler called", 404, null);
    res.status(404).send('Route not found in the application.');
} //end not found handler

module.exports = {
    globalErrorHandler: errorHandler,
    globalNotFoundHandler: notFoundHandler
}
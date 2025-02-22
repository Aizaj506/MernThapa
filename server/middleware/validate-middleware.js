const validate =  (schema) => async (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        // console.log(error);
        // return res.status(400).json({ errors: error.errors.map(err => err.message) });
        const status = 422;
        const message = "Fill the input properly"
        const extraDetails = err.errors[0];
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error)
        next(error);
    }
};

module.exports = validate;

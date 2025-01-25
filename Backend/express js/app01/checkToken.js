const checkToken = (req, res, next) => {
    const token = process.env.myToken;
    if (req.query.token == token) {
        next();
        console.log("Middleware is running");
    }
    else if (req.query.token != token) {
        res.send({
            status: 401,
            message: "unauthorized token"
        })
    }
    next();

}

module.exports = { checkToken };
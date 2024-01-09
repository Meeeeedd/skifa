const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        res.status(403).json({Error :"You are not allowed"})
    }
    next()
}
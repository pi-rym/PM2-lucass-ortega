function movieMiddleware (req, res, next){
    req.body
    if (!title || !year || !director){
        throw new Error ('Missing required fields');
        
    }
}
next()
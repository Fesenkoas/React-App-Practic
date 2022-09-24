import jwt from 'jsonwebtoken'
export const checkAuth = (req, res, next) =>{
const token = (req.headers.authorization || '').replase(/Bearer\s?/, '')
if(token){
    try {
        const decodet = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodet.id
        next()
    } catch (error) {
        return res.json({message:"Acess low"})
    }
}else {
    return res.json({message:"Acess low"})
}
}
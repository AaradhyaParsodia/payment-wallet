
import jwt from "jsonwebtoken";
import { JWT_SECRET } from '../config.js'


export function authMiddleware(req, res, next){
    const auth = req.headers.authorization;

    if(!auth || !auth.startsWith('Bearer ')){
        res.status(403).json({
            message: 'Invalid Authorixation Token Abey Check kar kaha galti h Hint: Bearer me ho sakti h'
        });
        return;
    }


    const authArr = auth.split(' ');
    const token = authArr[1];
    try{
        const decodeValue = jwt.verify(token,JWT_SECRET);
        
        if(decodeValue.userId){
            req.userId = decodeValue.userId;
            next();
        }
        else{
            return res.status(403).json({
                message: 'Invalid Authorixation Token Abbey Check kar kaha galti h'
            });
        }
    }
    catch(e){
        console.error(e);
        res.status(403).json({
            message: 'Invalid Authorixation Token Abbey Check kar kaha galti h'
        });
        return;
    }

}
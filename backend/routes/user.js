import express from "express";
import zod from "zod";
import { Accounts, User } from "../db.js";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from '../config.js'
import { authMiddleware } from "../middleware/userMiddleware.js";
export const userRouter = express.Router();



const userSchema = zod.object({
    username: zod.string().email().max(30),
    firstName: zod.string().max(30),
    lastName: zod.string().max(30),
    password: zod.string().min(6)
})
const userSigninBody = zod.object({
    username: zod.string().email().max(30),
    password: zod.string().min(6)
})

const userUpdateCred = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().max(30).optional(),
    lastName: zod.string().max(30).optional()
})

userRouter.post('/signup', async (req,res)=>{
    const body = req.body;
    
    const {success} = userSchema.safeParse(req.body);
    console.log(`${body.username}`);
    const user = await User.findOne({
        username: body.username
    });
    console.log(user);
    if(!success || user != null && user._id){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }
    
    
    
    console.log(`it's okay`);
    // ________________________________
    const createUser = await User.create(body);
    // ________________________________

    const userId = createUser._id;

    await Accounts.create({
        userId,
        balance: Math.random() * 10000
    })
    
    const token = jwt.sign({
        userId: createUser._id
    }, JWT_SECRET);


    res.status(200).json({
        message: "User created successfully",
        token: token
    });
})


userRouter.post('/signin', async (req , res)=>{
    const body = req.body;

    const {success} = userSigninBody.safeParse(req.body);

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })
    
    if(!success || !user._id){
        res.status(411).json({
            message: "Error while logging in / Incorrect inputs"
        });
        return;
    }
    
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    res.status(200).json({
        message: "Here is your Token keep this with you and dont ask again and again for got it",
        token: token
    });
    
})

userRouter.put('/', authMiddleware,  async (req, res)=>{
    const body = req.body;
    
    const { success } = userUpdateCred.safeParse(req.body);
    
    if( !success || body.password === "" && body.firstName === "" && body.lastName === ""){
        return res.status(411).json({
            message: "Error while updating information or please fill info correctly"
        });
    }

    await User.updateOne({ _id: req.userId }, body)

    res.status(200).json({
        message: 'Updated successfully'
    });
})

userRouter.get('/bulk', authMiddleware, async (req, res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({ $or:[ { firstName:{
        '$regex': filter
    }}, {lastName:{
        '$regex': filter   
    }} ]});

    res.json({
        user: users.map( user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

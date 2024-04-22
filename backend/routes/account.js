import express from "express";
import { authMiddleware } from '../middleware/userMiddleware.js'
import { Accounts } from "../db.js";
import zod, { number, string } from "zod";
import mongoose from "mongoose";


export const accountRouter = express.Router();


const moneyTransfer = zod.object({
    userIdTo: string().min(1),
    amount: number()
})


accountRouter.get('/balance', authMiddleware , async ( req , res )=>{
    // const userId = req.userId;
    const accountData = await Accounts.findOne({
        userId: req.userId
    });

    res.json({
        balance: accountData.balance
    });

});

accountRouter.post('/transfer', authMiddleware, async ( req , res )=> {
    const session = await mongoose.startSession();

    session.startTransaction();

    try{
        const { to, amount } = req.body;

        if(!to && !amount){
            return res.status(400).json({
                message: 'Please provide the following details: toSender Id and amount'
            });
        }

        const fromUserId = req.userId;

        const fromAccountData = await Accounts.findOne({
            userId: fromUserId
        }).session(session);
        
        if( !fromAccountData || fromAccountData.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: 'Insufficient balance'
            });
        }
        
        const toAccountData = await Accounts.findOne({
            userId: to
        }).session(session);
        
        if(!toAccountData){
            await session.abortTransaction();
            return res.status(400).json({
                messege: 'Invalid account'
            });
        }

        await Accounts.updateOne({
            userId: req.userId
        }, {
            $inc: { balance: -amount}
        }).session(session);
        
        await Accounts.updateOne({
            userId: to
        }, {
            $inc: { balance: amount}
        }).session(session);
        
        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            messege: 'Transfer successful'
        });
    }
    catch (err) {
        await session.abortTransaction();
        session.endSession();

        return res.status(500).json({
            status: false,
            message: `Unable to find perform transfer. Please try again. \n Error: ${err}`
        })
    }

});
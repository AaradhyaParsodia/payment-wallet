import  express  from "express";

import { userRouter } from "./user.js";
import { accountRouter } from "./account.js";
// const app = express();

// const PORT = 3000;

export const rootRouter = express.Router();

rootRouter.use('/user', userRouter);

rootRouter.use('/account', accountRouter);
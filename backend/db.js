import mongoose from "mongoose";

connectionDB();

async function connectionDB() {
    return await mongoose.connect("mongodb+srv://something:doaesnBROtLWJH3u@app.pfudi82.mongodb.net/basicPaytm")
};

// console.log(`Connected ${connectionDB()}`);

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    // balance: Number
});

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

export const User = mongoose.model('User',userSchema);

export const Accounts = mongoose.model('Accounts', accountSchema);
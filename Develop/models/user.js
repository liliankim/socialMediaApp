const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        usernameID: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,

        },
        thoughts: {
            type: String,
           

        },
        friends: {
            type: 
        }
    }
)
const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema (
    {
    thoughtText:{
        type: String,
        required: true,
    }




    }
)
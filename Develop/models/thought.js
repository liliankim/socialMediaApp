const { Schema, Types } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },

    {
        toJSON: {
            getters: true,
        },

    }
);
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})
const Thought = model('thought',thoughtSchema);

moduel.exports = Thought;
const { Schema, Types } = require('mongoose');

const noteSchema = new Schema(
    {
        noteId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        noteText: {
            type: String,
            required: 'Note Text is required!'
        }
    }
);


module.exports = noteSchema;
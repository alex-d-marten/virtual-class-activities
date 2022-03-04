const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
  // Add these four attributes to your schema: username, password, email, userCreated
    username: {
      type: String,
      trim: true,
      required: 'Username is Required!'
    },
    password: {
      type: String,
      required: 'Password is required and must be at least 6 characters.',
      minlength: 6,
      // validate: [({ length }) => length >= 6, 'Password needs to be at least 6 characters.']
    },
    email: { 
      type: String,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email!']
    },
    userCreated: {
      type: Date,
      default: Date.now
    }
}
);

const User = model('User', UserSchema);

module.exports = User;

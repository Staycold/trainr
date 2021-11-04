const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            maxlength: [20, 'Username cannot be more than 40 characters']
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
          password: {
            type: String,
            required: true,
          },
    }
);



module.exports = mongoose.models.User || mongoose.model('User' ,
UserSchema);

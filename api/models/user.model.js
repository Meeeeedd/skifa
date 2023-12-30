const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    avatar: { type: String }, // Store the URL or file path of the user's avatar
    displayName: { type: String },
    dateOfBirth: { type: Date },
    interests: { type: [String] },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Hash the password before saving
userSchema.pre('save', async function (next) {
    try {

        if (!this.isModified('password')) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
        
    } catch (error) {
        next(error);
    }
});

// Compare password for login
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

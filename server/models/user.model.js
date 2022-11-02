const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/poker')

const User = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        points: { type: Number, required: true, default: 0},
        visits: { type: Number, required: true, default: 0}
    },
    { collectiopn: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model


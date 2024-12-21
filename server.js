
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/food-ws', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.send('User registered');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid email or password');
    
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.json({ token });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Food Website API');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

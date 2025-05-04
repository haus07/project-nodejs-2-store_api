const asyncErrorHandler = require('../utils/asyncErrorHandler');
const { BadRequestError }  = require('../errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = asyncErrorHandler(async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    //check xem thu username hay password co ton tai ko
    if (!username || !password) {
        throw new BadRequestError('Username and password must be provided');
    }
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' }); 


    res.status(200).json({msg:'user created',token});
})

const dashboard = asyncErrorHandler(async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello,${req.user.username}!!`, secret: `Your lucky number is ${luckyNumber}` });
});


module.exports = {
    login, dashboard
};
import Users from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        console.log(req.body)
        const user = await Users.findAll({
            where: {
                username: req.body.username
            }
        });
        console.log(req.body.password)
        console.log(user[0])
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user[0].id;
        const username = user[0].username;
        const password = user[0].password;
        const accessToken = jwt.sign({ userId, username, password }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({ userId, username, password }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "Username not found" });
    }
}


// export const Register = async(req, res) => {
//     const { name, email, password, confPassword } = req.body;
//     if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
//     const salt = await bcrypt.genSalt();
//     const hashPassword = await bcrypt.hash(password, salt);
//     try {
//         await Users.create({
//             name: name,
//             email: email,
//             password: hashPassword
//         });
//         res.json({msg: "Registration Successful"});
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const Logout = async(req, res) => {
//     const refreshToken = req.cookies.refreshToken;
//     if(!refreshToken) return res.sendStatus(204);
//     const user = await Users.findAll({
//         where:{
//             refresh_token: refreshToken
//         }
//     });
//     if(!user[0]) return res.sendStatus(204);
//     const userId = user[0].id;
//     await Users.update({refresh_token: null},{
//         where:{
//             id: userId
//         }
//     });
//     res.clearCookie('refreshToken');
//     return res.sendStatus(200);
// }
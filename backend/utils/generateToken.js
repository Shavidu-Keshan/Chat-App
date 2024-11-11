import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID,res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,//ms
        httpOnly: true, //prevents client side js from accessing the cookie(XSS attack)
        sameSite:"strict",//prevents cookie from being sent to other domains(Csrf attack)
        secure: process.env.NODE_ENV === "development",
    });
}

export default generateTokenAndSetCookie;

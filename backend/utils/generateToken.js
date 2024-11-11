import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID,res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET,{expiresIn:"1h"});
}

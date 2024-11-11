import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - no provided token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - invalid token" });
        }

        const user = await User.findById(decoded.userID).select("-password");

        if (!user) {
            return res.status(401).json({ error: "Unauthorized - user not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute
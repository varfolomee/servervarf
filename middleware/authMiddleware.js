import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const secret = process.env.SECRET_KEY;

/** Проверка - авторизован пользователь или нет. */
export function authMiddleware (req, res, next) {
    if(req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; //Bearer token
        if(!token) {
            return res.status(401).json({ message: "Не авторизован"});
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch(e) {
        res.status(401).json({ message: "Нет доступа"});
    }
}
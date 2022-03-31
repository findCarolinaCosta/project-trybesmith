import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/jwtGenerator';

function validationToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ error: 'Token not found' });

    const decoded = validateToken(token);

    req.body.userId = decoded.data.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }  
}

export default validationToken;
import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET: string | undefined = process.env.SECRET_KEY || 'superSecretKey';

export const createToken = (data: object = {}) => jwt.sign({ data }, SECRET, jwtConfig);

export const validateToken = (token: string) => jwt.verify(token, SECRET) as jwt.JwtPayload;
import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET: string | undefined = process.env.SECRET_KEY || '';

const createToken = (data: object = {}) => jwt.sign({ data }, SECRET, jwtConfig);

export default createToken;
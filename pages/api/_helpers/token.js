import jwt from "jsonwebtoken";

const signToken = async payload =>
  await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION
  });

const validateToken = async token => {
  try {
    if (!token) throw new Error();
    return await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export { signToken, validateToken };

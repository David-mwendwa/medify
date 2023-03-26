import User from '../models/userModel.js';
import { UnauthenticatedError, ForbiddenError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

/**
 * Middleware to check user authentication to allow access to a certain resource
 * Checks for bearer token through req headers, signedCookies or cookies
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const protect = async (req, res, next) => {
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  } else if (req.signedCookies && req.signedCookies.token) {
    token = req.signedCookies.token;
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    throw new UnauthenticatedError('Authentication Invalid. Please log in.');
  }
  const { id, role } = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = { id, role };
  next();
};

/**
 * Middleware to check user authorization to access a certain resource based on their role
 * @param  {...any} roles one more values to give authorization to from @example authorizeRoles('admin', 'lead', ...)
 * @returns true/false
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ForbiddenError(
        `${req.user.role} is not allowed to perfom this action`
      );
    }
    next();
  };
};

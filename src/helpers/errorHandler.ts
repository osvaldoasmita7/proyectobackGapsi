import { Response } from 'express';

export const errorHandler = (res: Response, error: Error) => {
  try {
    const errorHandled = JSON.parse(error.message);
    return res.status(errorHandled.status).json(errorHandled);
  } catch (newError) {
    return res.status(500).json(error);
  }
};

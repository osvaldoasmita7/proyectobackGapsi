import { Response } from 'express';
import { ErrorHandled } from 'src/interfaces';
import { tError } from 'src/types';

export const errorHandler = (res: Response, error: ErrorHandled) => {
  try {
    // Se tipea la respuesta
    const errorHandled = error?.response as tError;
    // Retorna el error manejado
    return res.status(errorHandled.status).json(errorHandled);
  } catch (newError) {
    // Si ocurre un error ajeno lo regresa
    return res.status(500).json(error);
  }
};

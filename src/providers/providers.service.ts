import { Injectable } from '@nestjs/common';
import {
  deleteProviderById,
  getAllProviders,
  writeProvider,
} from './../useCases';
import { iProvider } from '../interfaces';

@Injectable()
export class ProvidersService {
  /**
   *  Servicio que manda a traer los proveedores de la base de datos
   */
  getProviders = async () => {
    return await getAllProviders();
  };

  /**
   *  Servicio que manda a crear un proveedor de la base de datos
   */
  postProviders = async (data: iProvider) => {
    try {
      return await writeProvider(data);
    } catch (error) {
      throw error;
    }
  };

  /**
   *  Servicio que elimina un proveedor de la base de datos
   */
  deleteProvider = async (id: number) => {
    try {
      return await deleteProviderById(id);
    } catch (error) {
      throw error;
    }
  };
}

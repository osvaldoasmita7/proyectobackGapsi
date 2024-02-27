import { Injectable } from '@nestjs/common';
import {
  deleteProviderById,
  getAllProviders,
  writeProvider,
} from './../useCases';
import { iProvider } from '../interfaces';

@Injectable()
export class ProvidersService {
  getProviders = async () => {
    return await getAllProviders();
  };
  postProviders = async (data: iProvider) => {
    try {
      return await writeProvider(data);
    } catch (error) {
      throw error;
    }
  };
  deleteProvider = async (id: number) => {
    try {
      return await deleteProviderById(id);
    } catch (error) {
      throw error;
    }
  };
}

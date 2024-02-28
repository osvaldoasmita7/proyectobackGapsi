import { Injectable } from '@nestjs/common';
import { getCustomerNumber, putCustomerNumber } from '../useCases';

@Injectable()
export class CustomersService {
  /**
   * Función de servicio que obtiene el número consecutivo de la base de datos
   */
  getCustomer = async () => {
    return await getCustomerNumber();
  };
  /**
   * Función de servicio que actualiza el número consecutivo en la base de datos
   */
  putCustomerNumber = async (id: string) => {
    try {
      return await putCustomerNumber(id);
    } catch (error) {
      throw error;
    }
  };
}

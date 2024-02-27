import { Injectable } from '@nestjs/common';
import { getCustomerNumber, putCustomerNumber } from '../useCases';

@Injectable()
export class CustomersService {
  getCustomer = async () => {
    return await getCustomerNumber();
  };
  putCustomerNumber = async (id: string) => {
    try {
      return await putCustomerNumber(id);
    } catch (error) {
      throw error;
    }
  };
}

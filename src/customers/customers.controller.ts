import { Body, Controller, Get, Put, Res } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersDto } from './dto/customers.dto';
import { errorHandler } from '../helpers/errorHandler';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  /**
   * Endpoint que sirve para traer el número consecutivo de clientes
   */
  @Get('')
  @ApiResponse({
    status: 200,
    description: '1',
  })
  GetCustomerNumber() {
    return this.customersService.getCustomer();
  }
  /**
   * Endpoint que sirve para actualizar el número consecutivo de clientes
   */
  @Put('')
  @ApiResponse({
    status: 200,
    description: '1',
  })
  async PostCustomerNumber(
    @Body() { customerNumber }: CustomersDto,
    @Res() res: Response,
  ) {
    try {
      // Se guarda la respuesta de la llamada de la actualización del número consecutivo
      const response =
        await this.customersService.putCustomerNumber(customerNumber);
      // Retorna petición con la respuesta
      return res.json(response);
    } catch (error) {
      // Maneja el error
      return errorHandler(res, error);
    }
  }
}

import { Body, Controller, Get, Put, Res } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersDto } from './dto/customers.dto';
import { errorHandler } from '../helpers/errorHandler';
import { Response } from 'express';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('')
  GetCustomerNumber() {
    return this.customersService.getCustomer();
  }

  @Put('')
  async PostCustomerNumber(
    @Body() { customerNumber }: CustomersDto,
    @Res() res: Response,
  ) {
    try {
      const response =
        await this.customersService.putCustomerNumber(customerNumber);
      return res.json(response);
    } catch (error) {
      return errorHandler(res, error);
    }
  }
}

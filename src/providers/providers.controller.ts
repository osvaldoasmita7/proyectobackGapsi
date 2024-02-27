import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersDto } from './dto/providers.dto';
import { Response } from 'express';
import { errorHandler } from '././../helpers/errorHandler';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('')
  GetProviders() {
    return this.providersService.getProviders();
  }

  @Post('')
  async PostProviders(@Body() body: ProvidersDto, @Res() res: Response) {
    try {
      const response = await this.providersService.postProviders(body);
      return res.json(response);
    } catch (error) {
      return errorHandler(res, error);
    }
  }
  @Delete('/:id')
  async DeleteProviders(@Param('id') id: number, @Res() res: Response) {
    try {
      const response = await this.providersService.deleteProvider(id);
      return res.json(response);
    } catch (error) {
      return errorHandler(res, error);
    }
  }

  @Get('/version')
  GetVersion(@Res() res: Response) {
    return res.json({ version: '0.0.1' });
  }
}

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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  providersArrayResponse,
  statusResponse,
  versionResponse,
} from '../responsesSwagger';

@ApiTags('providers')
@Controller('providers')
@Controller('providers')
/**
 * Controlador proveedor
 */
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  /**
   * Endpoint que permite traer todos los proveedores registrados
   */
  @Get('')
  @ApiResponse({
    status: 200,
    description: providersArrayResponse,
  })
  GetProviders() {
    //Manda a ejecutar el servicio para traer los proveedores
    return this.providersService.getProviders();
  }
  /**
   * Endpoint que permite crear los proveedores validando que no existan
   */

  @Post('')
  @ApiResponse({
    status: 200,
    description: statusResponse,
  })
  async PostProviders(@Body() body: ProvidersDto, @Res() res: Response) {
    try {
      //Manda a ejecutar el servicio para crear el proveedor
      const response = await this.providersService.postProviders(body);
      return res.json(response);
    } catch (error) {
      return errorHandler(res, error);
    }
  }
  /**
   * Método que elimina un proveedor
   */
  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: statusResponse,
  })
  async DeleteProviders(@Param('id') id: number, @Res() res: Response) {
    try {
      //Manda a ejecutar el servicio para eliminar el proveedor
      const response = await this.providersService.deleteProvider(id);
      return res.json(response);
    } catch (error) {
      return errorHandler(res, error);
    }
  }
  /**
   * Endpoint para regresar la versión del sistema
   */
  @Get('/version')
  @ApiResponse({
    status: 200,
    description: versionResponse,
  })
  GetVersion(@Res() res: Response) {
    return res.json({ version: '0.0.1' });
  }
}

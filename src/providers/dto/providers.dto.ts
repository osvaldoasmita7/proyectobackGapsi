import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ProvidersDto {
  @ApiProperty({
    example: 'Bodega Aurrerá',
    description: 'Nombre del proveedor',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'BAE123ZD',
    description: 'Razón social del proveedor',
  })
  @IsString()
  @IsOptional()
  readonly bussinessName: string;

  @ApiProperty({
    example: 'Av. Canal de rio churubusco 1023. México',
    description: 'Dirección del proveedor',
  })
  @IsString()
  @IsOptional()
  readonly address: string;
}

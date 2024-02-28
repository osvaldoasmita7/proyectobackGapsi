import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CustomersDto {
  @ApiProperty({ example: '1', description: 'Número consecutivo de cliente' })
  @IsString()
  readonly customerNumber: string;
}

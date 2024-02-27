import { IsString } from 'class-validator';

export class CustomersDto {
  @IsString()
  readonly customerNumber: string;
}

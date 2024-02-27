import { IsOptional, IsString } from 'class-validator';

export class ProvidersDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly bussinessName: string;

  @IsString()
  @IsOptional()
  readonly address: string;
}

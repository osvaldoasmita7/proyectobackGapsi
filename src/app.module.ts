import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProvidersModule } from './providers/providers.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ProvidersModule, CustomersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

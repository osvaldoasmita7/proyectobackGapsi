import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  //configuración de swagger
  const config = new DocumentBuilder()
    .setTitle('Documentación API GAPSI')
    .setDescription(
      'Documentación de todos los endpoints utilizados para el examen de prueba',
    )
    .setVersion('1.0')
    .build();
  //Configuraciones de swagger
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  // Iniciamos el proyecto en el puerto 3000
  await app.listen(3000);
}
bootstrap();

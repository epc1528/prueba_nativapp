import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './utils/config/enviroments';
import middlewares from './utils/config/middlewares';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from './config/logger/logger.service';
import { TimeoutInterceptor } from './config/interceptors/timeout';
import { ResponseInterceptor } from './config/interceptors/response';
import swaggerUi from 'swagger-ui-express'; 
import YAML from 'yamljs';

async function bootstrap() {
  const logger = new LoggerService();
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  middlewares(app);
  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError:true,
  }));
   
const swaggerDocument = YAML.load('./swagger.yml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
  await app.listen(port);
}
bootstrap();

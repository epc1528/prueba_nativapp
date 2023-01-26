import { Global, Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/config/exception/exception.module';
import { GuardsService } from './guard.service';

@Global()
@Module({
  imports: [ExceptionsModule],
  providers: [GuardsService],
  exports: [GuardsService],
})
export class GuardsModule {};
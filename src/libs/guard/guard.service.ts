import { ForbiddenException, Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/config/exception/exceptions.service';

@Injectable()
export class GuardsService {
  constructor(
      private readonly exceptions: ExceptionsService,
  ) {};
};
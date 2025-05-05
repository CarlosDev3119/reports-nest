import { Module } from '@nestjs/common';
import { AeromexicoService } from './aeromexico.service';
import { AeromexicoController } from './aeromexico.controller';

@Module({
  controllers: [AeromexicoController],
  providers: [AeromexicoService],
})
export class AeromexicoModule {}

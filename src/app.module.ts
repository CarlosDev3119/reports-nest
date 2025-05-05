import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { AeromexicoModule } from './aeromexico/aeromexico.module';


@Module({
  imports: [BasicReportsModule, AeromexicoModule],
})
export class AppModule {}

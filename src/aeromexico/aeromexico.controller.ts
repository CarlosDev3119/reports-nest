import { Controller, Get, Res } from '@nestjs/common';
import { AeromexicoService } from './aeromexico.service';

@Controller('aeromexico')
export class AeromexicoController {
  constructor(private readonly aeromexicoService: AeromexicoService) {}

  @Get('aeromexico-reports')
  async getReportAm( @Res() response: Response ){
    return this.aeromexicoService.getReport();
  }

}

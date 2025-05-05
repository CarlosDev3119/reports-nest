import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer/printer.service';
import { getHellowWorldReport } from 'src/reports';





@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
      await this.$connect();
      console.log('Conectado a base de datos ')
    }
  
    constructor(
        private readonly printerService: PrinterService 
    ){
        super();
    }

    hello(){


        const docDefinition = getHellowWorldReport({name: 'Carlos Ortega'});

        const doc = this.printerService.createPDF(docDefinition);

        return doc;
    }

}

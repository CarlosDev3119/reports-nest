import { TDocumentDefinitions } from "pdfmake/interfaces"

interface ReportOptions {

    name: string;


}

export const getHellowWorldReport = (options: ReportOptions):TDocumentDefinitions => {

    const { name } = options;

    const docDefinition: TDocumentDefinitions = {
        content: [`hola ${name}`]
    }

    return docDefinition

}
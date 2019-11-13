import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      width:500,
      fileName: 'form.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;
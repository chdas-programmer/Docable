import { FileText, Save, Download, Share } from 'lucide-react';

import StarterKit from '@tiptap/starter-kit';

import pdfMake from "pdfmake/build/pdfmake";

import htmlToPdfmake from "html-to-pdfmake";
import { useEditorContent } from '../ContextAPI/EditorContentContext';

const EditorHeader = () => {
  const { editorHtml } = useEditorContent();
  
  

 

  const handleExportPDF = () => {
    
    console.log(editorHtml);
    
    pdfMake.fonts = {
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf',
      },
      Arial: {
        normal: 'Arial.ttf',
        bold: 'Arial-Bold.ttf',
        italics: 'Arial-Italic.ttf',
        bolditalics: 'Arial-BoldItalic.ttf',
      }
    };
    
    const pdfmakeContent = htmlToPdfmake(editorHtml);

    const docDefinition = {
      content: pdfmakeContent,
      defaultStyle: {
        fontSize: 12
      },
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
    };

    pdfMake.createPdf(docDefinition).download('document.pdf');
  };




  return (
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Tiptap</h1>
          </div>
          <div className="text-sm text-gray-500"></div>
        </div>

        <div className="flex items-center gap-2">
          
          <button className="flex items-center px-3 py-1 font-bold text-sm text-gray-600 hover:text-gray-900 hover:cursor-pointer  hover:bg-gray-100 rounded"
          onClick={handleExportPDF}
          >
            <Download className="h-4 w-4 mr-2" />
            Export as PDF
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;

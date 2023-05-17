import { Component, OnInit, VERSION, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-gerador-pdf',
  templateUrl: './gerador-pdf.component.html',
  styleUrls: ['./gerador-pdf.component.css']
})


export class GeradorPdfComponent implements OnInit {

  public name = 'Angular ' + VERSION.major;
  @ViewChild('resumeForm', { static: true }) resumeForm: NgForm;
  public redesSociais: any = [];
  public titulos: any = [];

  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {

  }

  generatePdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open':
        pdfMake.createPdf('documentDefinition').open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }
  }

  addNovaRedeSocial() {
    this.redesSociais.push({ nome_rede_social: 'Feed:', link_rede_social: 'https://www.instagram.com/reel/CsCnRE8sUkB/?igshid=NTc4MTIwNjQ2YQ==' });
    this.redesSociais.push({ nome_rede_social: '1º Story:', link_rede_social: 'https://instagram.com/stories/videosertanejo/3099215850582219288?utm_source=ig_story_item_share&igshid=NTc4MTIwNjQ2YQ==' });
    this.redesSociais.push({ nome_rede_social: 'Facebook:', link_rede_social: 'https://fb.watch/kqBz6LvV-5/?mibextid=cr9u03' });
  }

  removeNovaRedeSocial() {
    this.redesSociais.pop();
  }

  addNovaTitulo() {
    this.titulos.push({ titulo: '01 - VÍDEO SERTANEJO - @videosertanejo' });
  }

  removeNovaTitulo() {
    this.titulos.pop();
  }

  resetForm() {
    this.redesSociais = [];
    this.titulos = [];
  }

  getDocumentDefinition() {
    var pdf = {
      content: [
        {
          text: 'Lauana Prado',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        }
      ],
      info: {
        title: 'Titulo ao imprimir',
        author: 'Luiz Felipe Ribeiro dos Santos',
        subject: 'Felipe',
        keywords: 'Felipe, ONLINE RESUME'
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true,
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        },
      },
    };

    
    for (let indexTil = 0; indexTil < this.titulos.length; indexTil++) {
      const title = this.titulos[indexTil];
      pdf.content.push({ text: title.titulo, style: 'header' } as never);

      var colunasAdd = [];
      for (let index = 0; index < this.redesSociais.length; index++) {
        var obj = { text: this.redesSociais[index].nome_rede_social + ' ' + this.redesSociais[index].link_rede_social, link: this.redesSociais[index].link_rede_social };
        colunasAdd.push(obj);
        pdf.content.push({ columns: [colunasAdd] } as never);
      }
    }

    return pdf;
  }

}
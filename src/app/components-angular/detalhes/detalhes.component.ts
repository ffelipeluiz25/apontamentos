import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesAngularComponent implements OnInit {

  public modal: NgbModalRef;
  @Input() workItems: any;

  @ViewChild('detalhesModal', { static: true }) detalhesModal: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  async open() {
    this.modal = this.modalService.open(this.detalhesModal, { size: 'lg', backdropClass: 'fix-modal-backdrop-zindex', windowClass: 'fix-modal-zindex' });
    return false;
  }

  close() {
    this.modal.close();
  }

}
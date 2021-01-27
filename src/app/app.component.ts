import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Iproduto, FireBaseService } from './services/fire-base.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup

  public produtosList: Iproduto[] = [];
  public produtosDetalhes: Iproduto;


  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private FireBaseService: FireBaseService
  ) {

  }

  ngOnInit(): void {

  }

  getProduto(): void {
    this.FireBaseService.getProduto().subscribe( next: (res) => {
      this.produtosList = res.map(callbackin: (produtos) => {
        return{
          ...produtos.payload.doc.data(),
          id: produtos.payload.doc.id
        } as Iproduto;
      });
    } );



  }
}

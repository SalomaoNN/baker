import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private firestore: AngularFirestore) { }

  getProduto(){
    return this.firestore.collection ( path: 'produtos' ).snapshotChanges();
  }

  addProduto(payload: Iproduto ){
    return this.firestore.collection ( path: 'produtos' ).add(payload);
  }

  updateProduto(){
    return this.firestore.doc ( path: 'produtos/'+ produtosId ).update(payload);
  }

  deleteProduto(){
    return this.firestore.doc ( path: 'produtos/'+ produtosId ).delete();
  }
}

export interface Iproduto {
  id?: string;
  nome: string;
  valor: number;
  quantidade: number;
}

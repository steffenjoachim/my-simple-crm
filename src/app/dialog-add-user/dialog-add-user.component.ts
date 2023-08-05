import { Component, Input } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();

  @Input() users$ !: Observable<any[]>;
  usersCollection = collection(this.firestore, 'users');
  birthDate!: Date;
  constructor(  public dialog: MatDialog, private firestore:Firestore){
     
  }

saveUser(){
  this.user.birthDate = this.birthDate?.getTime();
  console.log('Current user is', this.user);
  addDoc(this.usersCollection,this.user);
}
}

import { Component, Input } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading = false;

  @Input() users$ !: Observable<any[]>;
  usersCollection = collection(this.firestore, 'users');
  
  constructor(public dialog: MatDialog, private firestore:Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>){
     
  }

saveUser(){
  this.user.birthDate = this.birthDate?.getTime();
  console.log('Current user is', this.user);
  this.loading = true;
  addDoc(this.usersCollection,this.user.toJSON())
  .then((results: any) => {
    this.user.firstName = '';
    this.user.lastName = '';
   // this.birthDate.clear() ;
    this.user.street = '';
   // this.user.zipCode = '' ;
    this.user.city = '';
    this.loading = false;
    this.dialogRef.close();
  })
}
}

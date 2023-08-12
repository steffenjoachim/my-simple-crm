import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
user = new User();
userId: any = "";
loading = false;
usersCollection = collection(this.firestore, 'users');


constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore:Firestore){
}

updateAddress(){
  const addressDoc = doc(this.usersCollection, this.userId);
  console.log(this.userId)
  updateDoc(addressDoc, this.user.toJSON());
  this.dialogRef.close();
  }
}

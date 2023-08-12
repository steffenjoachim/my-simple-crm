import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user = new User();
  loading = false;
  userId: any;
  usersCollection = collection(this.firestore, 'users');
  
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore:Firestore ){
    
  }
  
  saveUser(){
    const userDoc = doc(this.usersCollection, this.userId);
    console.log(this.userId)
    updateDoc(userDoc, this.user.toJSON());
    this.dialogRef.close();
  }
}

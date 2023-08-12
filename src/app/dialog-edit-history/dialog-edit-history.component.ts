import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-history',
  templateUrl: './dialog-edit-history.component.html',
  styleUrls: ['./dialog-edit-history.component.scss']
})
export class DialogEditHistoryComponent {
  user = new User();
  loading = false;
  birthDate!: Date;
  userId: any;
  usersCollection = collection(this.firestore, 'users');

constructor(public dialogRef: MatDialogRef<DialogEditHistoryComponent>, private firestore:Firestore){
  
}

saveHistory(){
  const historyDoc = doc(this.usersCollection, this.userId);
  updateDoc(historyDoc, this.user.toJSON());
  this.dialogRef.close();
}

}

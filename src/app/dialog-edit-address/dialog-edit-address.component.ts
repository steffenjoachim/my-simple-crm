import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

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
  docSnap: any;
  docRef: any;
  // docSnap: import("@angular/fire/firestore").DocumentSnapshot<DialogEditAddressComponent>;

constructor(private route: ActivatedRoute,public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore:Firestore){
}

updateAddress(){
  const addressDoc = doc(this.usersCollection, this.userId);
  console.log(this.userId)
  updateDoc(addressDoc, this.user.toJSON());
  this.dialogRef.close();
  this.getUser();
}

// async getUser() {
//   console.log(this.userId)
//   this.docRef = doc(collection(this.firestore, 'users'), this.userId);
//   this.docSnap = await getDoc(this.docRef);
//   this.user = new User(this.docSnap.data());
// }

async getUser() {
  console.log(this.userId)
  let usersCollection = collection(this.firestore, 'users');
  this.docRef = onSnapshot(doc(this.usersCollection, this.userId), () =>{
    getDoc(this.userId);
    // this.docSnap = await getDoc(this.docRef);
    // this.user = new User(this.docSnap.data());
  });
 
}

}

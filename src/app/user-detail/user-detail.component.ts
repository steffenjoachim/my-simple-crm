import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditHistoryComponent } from '../dialog-edit-history/dialog-edit-history.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  implements OnInit{

  userId: any = "";
  coll: any;
  docRef: any;
  docSnap: any;

  user: User = new User();

  constructor(private route: ActivatedRoute, 
    private firestore: Firestore,
    public dialog: MatDialog) {
      this.userId = this.route.snapshot.paramMap.get('id');
      this.docRef = doc(collection(this.firestore, 'users'), this.userId);
      this.getUser();
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
      console.log(this.userId);
    })
  }

  async getUser() {
    this.docSnap = await getDoc(this.docRef);
    this.user = new User(this.docSnap.data());
  }

  editUserDetails(){
    const dialog = this.dialog.open(DialogEditUserComponent); 
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editMenu(){
     const dialog = this.dialog.open(DialogEditAddressComponent);
     dialog.componentInstance.user = new User(this.user.toJSON());
     dialog.componentInstance.userId = this.userId;
  }

  editHistory(){
    const dialog = this.dialog.open(DialogEditHistoryComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

}
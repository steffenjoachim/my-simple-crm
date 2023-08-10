import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

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

constructor(public dialogRef: MatDialogRef<DialogEditHistoryComponent>){
  
}

saveUser(){

}

}

import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user = new User();
  loading = false;
  userId: any;
  
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent> ){
    
  }
  
  saveUser(){
  
  }
}

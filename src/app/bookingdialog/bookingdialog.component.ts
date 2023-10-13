import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-bookingdialog',
  templateUrl: './bookingdialog.component.html',
  styleUrls: ['./bookingdialog.component.css'],
})
export class BookingdialogComponent {
  // TODO: change the name attribute to an actual resource
  name: string = ""

  constructor(public dialog: MatDialog) {}
  
}
/*
//TODO: Unveil the mystery of why this is here
@Component({
  selector: 'bookingdialog-dialog',
  templateUrl: './bookingdialog-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],


})
*/
export class BookingDialog {
  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


export interface DialogData {
  name: string;
}




import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingdialogComponent } from '../app/bookingdialog/bookingdialog.component';

@Injectable()
export class BookingDialogService {
  constructor(private dialog: MatDialog) {}


  //TODO: Change the arguments to match the actual booking 
  openDialog(name: string): void {
    const dialogRef = this.dialog.open(BookingdialogComponent, {
      data: { name },
    });
    
    //It does nothing
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      name = result;
    });
  }
}
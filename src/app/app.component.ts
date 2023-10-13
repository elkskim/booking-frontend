import { Component} from '@angular/core';
import { ApiService } from '../api/api.service';
import { Resource } from '../Model/resource'
import { BookingDialogService } from '../service/booking-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'booking-frontend';
  resources: Resource[] = [];
  displayedColumns = ['id', 'name', 'quantity', 'actions'];
  name: string = ""

  testData: IResource[] = [ 
    { id: 1, name: 'Course1', quantity: 5},
    { id: 2, name: 'Course2', quantity: 2},
    { id: 3, name: 'Course2', quantity: 3}
  ];
  
 
  dataSource = this.testData;

  constructor(private api: ApiService, private bookingDialogService: BookingDialogService) { }

  
  async fetchResources(): Promise<void> {
    await this.api.getResources()
      .then(res => {
        this.resources = res.data
        console.log(res.data)
      })
  }

  createTable() {
    //this.dataSource = new MatTableDataSource(this.resources);
    let tableArr: IResource[] = 
    [ 
      { id: 1, name: 'Course1', quantity: 5},
      { id: 2, name: 'Course2', quantity: 2},
      { id: 3, name: 'Course2', quantity: 3}
    ]
    //return new MatTableDataSource(tableArr)

    return tableArr
    
  } 

    //How do buttons work?
    openDialog() {
      console.log("Someone pressed the button")
    }

    openBookingDialog(): void {
      this.bookingDialogService.openDialog(this.name);
    }
  }



interface IResource 
{
  id: number;
  name: string;
  quantity: number
}


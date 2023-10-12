import { Component } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import { ApiService } from '../api/api.service';
import { Resource } from '../Model/resource'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-frontend';
  resources: Resource[] = [];
  displayedColumns = ['id', 'name', 'button'];
  dataSource: any;

  columnNames = [{
    id: 'position',
    value: 'Id',

  }, {
    id: 'name',
    value: 'Name',
  }];


  constructor(private api: ApiService) { }

  async fetchResources(): Promise<void> {
    await this.api.getResources()
      .then(res => {
        this.resources = res.data
        console.log(res.data)
      })
  }

  createTable() {
    this.dataSource = new MatTableDataSource(this.resources);
    
  }

  ngOnInit() {
    this.createTable();
  }




}

import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MockUser } from 'src/types/types';
import { MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'picture'];
  dataSource = new MatTableDataSource<MockUser>([]);
  index = 1;
  IsEmptyResponses = false;

  constructor(private service: AppService, private spinner: SpinnerService) {}

  ngOnInit(): void {
    this.getTableData(this.index);
    this.updateIndex();
  }

  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight; // viewport
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled

    const buffer = 1;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.getTableData(this.index);
      this.updateIndex();
    }
  }

  getTableData(index: number): any {
    if (!this.IsEmptyResponses) {
      this.spinner.requestStarted();
      this.service.getUsers(index).subscribe(
        (res) => {
          console.log('res is: ', res);
          if (res.data.length <= 0) {
            this.IsEmptyResponses = true;
          }
          this.dataSource.data = [...this.dataSource.data, ...res.data];
          this.spinner.requestEnded();
        },
        (err) => {
          console.log(err);
          this.spinner.resetSpinner();
        }
      );
    }
  }

  updateIndex() {
    this.index++;
  }
}

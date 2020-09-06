import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MockUser } from '../../../types/types';
// import users from '../../mocks/users';
import { AppService } from 'src/app/services/app.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  value = '';
  currentIndex: number;
  pageIndexes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  displayedColumns: string[] = ['name', 'email', 'picture'];
  dataSource = new MatTableDataSource<MockUser>([]);
  constructor(private service: AppService, private spinner: SpinnerService) {
    this.currentIndex = 1;
  }
  ngOnInit(): void {
    this.clearCache();
    this.changeIndex(this.currentIndex);
  }

  changeIndex(index: number) {
    const data: any = this.getUserFromCache(index);
    if (!data) {
      this.spinner.requestStarted();
      this.service.getUsers(index).subscribe(
        (res: any) => {
          this.dataSource = res.data;
          localStorage.setItem(`${index}`, JSON.stringify(this.dataSource));
          this.spinner.requestEnded();
        },
        (err) => {
          console.log('error occurued: ', err);
          this.spinner.resetSpinner();
        }
      );
    } else {
      this.dataSource = data;
    }
    this.currentIndex = index;
  }
  getUserFromCache(index: number): any {
    const value = JSON.parse(localStorage.getItem(`${index}`));
    return value;
  }

  clearCache(): void {
    localStorage.clear();
  }
}

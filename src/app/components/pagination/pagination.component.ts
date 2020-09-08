import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../types/types';
import { AppService } from 'src/app/services/app.service';
import { SpinnerService } from 'src/app/services/spinner.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  value = '';
  error = '';
  currentIndex: number;
  pageIndexes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  displayedColumns: string[] = ['id', 'name', 'picture'];
  dataSource = new MatTableDataSource<User>([]);
  constructor(private service: AppService, private spinner: SpinnerService) {
    this.currentIndex = 1;
  }
  ngOnInit(): void {
    this.clearCache();
    this.fetchUsers(this.currentIndex);
  }

  fetchUsers(index: number) {
    // check if the relevant data exist in cache
    const data: any = this.getUsersFromCache(index);
    if (!data) {
      this.spinner.requestStarted();
      this.service.getUsers(index).subscribe(
        (res: any) => {
          this.dataSource = res.data;
          // save data in cache
          localStorage.setItem(`${index}`, JSON.stringify(this.dataSource));
          this.spinner.requestEnded();
        },
        (err) => {
          console.log('error occurued: ', err);
          this.error = err.error;
          this.spinner.resetSpinner();
        }
      );
    } else {
      this.dataSource = data;
    }
    this.currentIndex = index;
  }
  getUsersFromCache(index: number): any {
    const value = JSON.parse(localStorage.getItem(`${index}`));
    return value;
  }

  clearCache(): void {
    localStorage.clear();
  }

  searchUserById(id) {
    if (id && id !== '') {
      const data = this.getUsersFromCache(id);
      if (!data) {
        this.spinner.requestStarted();

        this.service.getUserById(id).subscribe(
          (res: any) => {
            const newData = [];
            newData[0] = res;
            this.dataSource = new MatTableDataSource<User>(newData);
            localStorage.setItem(`${id}`, JSON.stringify(res));
            this.spinner.requestEnded();
          },
          (err) => {
            this.spinner.resetSpinner();
            this.error = err.error;
            console.log('err is: ', err);
          }
        );
      } else {
        const dataArr = [];
        dataArr[0] = data;
        this.dataSource = new MatTableDataSource<User>(dataArr);
      }
    }
  }

  clearInput() {
    this.value = '';
    this.error = '';
    this.fetchUsers(this.currentIndex);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  showPaginationPage = true;
  showScrollPage = false;
  constructor(private http: HttpClient) {}

  showPagination() {
    this.showPaginationPage = true;
    this.showScrollPage = false;
  }
  showInfiniteScroll() {
    this.showPaginationPage = false;
    this.showScrollPage = true;
  }
  getUsers(index: number): Observable<any> {
    const headerDict = {
      'app-id': `${environment.APP_ID_TOKEN}`,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<any>(`${environment.API_URL}${index}`, requestOptions);
  }

  getUserById(id: number): Observable<any> {
    const headerDict = {
      'app-id': `${environment.APP_ID_TOKEN}`,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    // GorKRYsi8zHkLq9siyfU
    // H1oN2F8v53t7GK0nQ6km
    return this.http.get<any>(`${environment.API_GET_USER_URL}${id}`, requestOptions);
  }
}

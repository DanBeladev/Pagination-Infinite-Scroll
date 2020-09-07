import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  gotoPagination() {
    this.service.showPagination();
    // this.router.navigateByUrl('/pagination');
  }
  gotoScroll() {
    this.service.showInfiniteScroll();
    // this.router.navigateByUrl('/scroll');
  }

}

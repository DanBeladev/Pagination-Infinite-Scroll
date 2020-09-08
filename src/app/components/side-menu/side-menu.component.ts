import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  gotoPagination() {
    this.service.showPagination();
  }
  gotoScroll() {
    this.service.showInfiniteScroll();
  }

  changeTheme() {
      document.body.classList.toggle('light');
      document.body.classList.toggle('dark');
    }
  }

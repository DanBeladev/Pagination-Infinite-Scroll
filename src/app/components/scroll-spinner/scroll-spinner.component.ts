import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-scroll-spinner',
  templateUrl: './scroll-spinner.component.html',
  styleUrls: ['./scroll-spinner.component.scss']
})
export class ScrollSpinnerComponent implements OnInit {

  showSpinner = false;
  constructor( private spinnerService: SpinnerService, private app: AppService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start' && this.app.showScrollPage);
      this.cdRef.detectChanges();
    });
  }
}

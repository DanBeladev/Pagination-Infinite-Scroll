import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  showSpinner = false;
  constructor(
    private spinnerService: SpinnerService,
    private app: AppService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start' && this.app.showPaginationPage;
      this.cdRef.detectChanges();
    });
  }
}

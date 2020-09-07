// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// components
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ScrollSpinnerComponent } from './components/scroll-spinner/scroll-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ScrollComponent,
    SideMenuComponent,
    SpinnerComponent,
    ScrollSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    // MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

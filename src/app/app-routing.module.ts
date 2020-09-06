import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ScrollComponent } from './components/scroll/scroll.component';

const routes: Routes = [
  { path: '', component: PaginationComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'scroll', component: ScrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

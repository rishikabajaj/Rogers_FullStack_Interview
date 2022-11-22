import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageTemplateCollectionComponent } from './page-template-collection/page-template-collection.component';

const routes: Routes = [
  {
    path: ':page',
    component: PageTemplateCollectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {ProdListComponent} from './prod-list/prod-list.component';
import {ProdAddComponent} from './prod-add/prod-add.component';
import {ProdDetailComponent} from './prod-detail/prod-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProdListComponent
      },
      {
        path: 'add',
        component: ProdAddComponent
      },
      {
        path: 'detail',
        component: ProdDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}

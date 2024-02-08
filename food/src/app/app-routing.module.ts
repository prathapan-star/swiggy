import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { RestListComponent } from './rest-list/rest-list.component';
const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'search',component:SearchComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'rest-list',component:RestListComponent},
  {path:'admin',component:AdminComponent},
  {path:'edit-admin/:id',component:EditAdminComponent},
  {path:'',redirectTo:'admin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

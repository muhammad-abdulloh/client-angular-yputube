import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './pages/get-all/get-all.component';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { GetByIdComponent } from './pages/get-by-id/get-by-id.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home Page', component: HomeComponent },
  { path: 'get-all', title: 'Get All Users', component: GetAllComponent },
  { path: 'create', title: 'Create User', component: CreateComponent },
  { path: 'delete', title: 'Delete User', component: DeleteComponent },
  { path: 'update', title: 'Update User', component: UpdateComponent },
  { path: 'get-by-id', title: 'Get By Id', component: GetByIdComponent },
  { path: '**', title: 'Not Found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: MessageListComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { PublicTaskComponent } from './components/public-task/public-task.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

/* Guard */
import { AuthFrontendGuard } from './guard/auth-frontend.guard';

const routes: Routes = [
  {
    path: 'privateTasks',
    component: PrivateTaskComponent,
    canActivate: [AuthFrontendGuard],
  },
  { path: 'publicTasks', component: PublicTaskComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/publicTasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

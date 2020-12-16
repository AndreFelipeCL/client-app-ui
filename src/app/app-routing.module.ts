import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
	{
		path: "", component: LayoutComponent, children: [
			{ path: "home", component: HomeComponent, canActivate : [AuthGuard] }
		]
	},
	{ path: "login", component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


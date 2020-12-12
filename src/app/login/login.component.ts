import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	username: string;
	password: string;
	loginError: boolean = false;
	newUser: boolean = false;

	constructor(
		private router: Router
	) { }

	onSubmit() {
		console.log(this.username);
		console.log(this.password);
		console.log("Login Error? " + this.loginError);
		this.router.navigate(['/home']);
	}

	prepareRegister(event: Event) {
		event.preventDefault();
		this.newUser = true;
	}

	backToLogin(event: Event) {
		event.preventDefault();
		this.newUser = false;
	}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	username: string = 'andrefelipecl92';
	password: string = '123';
	loginError: boolean = false;
	newUser: boolean = false;
	successMessage: string = null;
	errorMessage: string[] = null;

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	onSubmit() {
		this.authService.tryLogin(this.username, this.password)
		.subscribe(
			response => {
				const access_token: string = JSON.stringify(response); //Convert a JSON object to a String
				localStorage.setItem('access_token', access_token);
				this.router.navigate(['/home']);
				console.info(response);
			},
			responseError => {
				this.errorMessage = ['Usuário/Senha incorreto'];
				console.error(responseError);
			}
		);
	}

	prepareRegister(event: Event) {
		event.preventDefault();
		this.newUser = true;
	}

	backToLogin(event: Event) {
		event.preventDefault();
		this.newUser = false;
	}

	registerNewUser() {
		this.authService.registerNewUser(new User(this.username, this.password))
			.subscribe(
				response => {
					this.loginError = false;
					this.successMessage = "Cadastro realizado com sucesso.";
					this.errorMessage = null;
					this.newUser = false;
				},
				responseError => {
					this.loginError = true;
					this.successMessage = null;
					this.errorMessage = responseError.error.errors ? responseError.error.errors : [responseError.error.message];
					console.log(responseError);
				}
			);
	}
}

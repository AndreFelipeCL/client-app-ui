import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	readonly ACCESS_TOKEN: string = 'access_token';

	private readonly apiUrl: string = environment.apiURL + '/user';
	private readonly tokenUrl: string = environment.apiURL + environment.tokenUrl;
	private readonly clientId: string = environment.clientId;
	private readonly clientSecret: string = environment.clientSecret;
	private jwtHelperService: JwtHelperService = new JwtHelperService();
	
	constructor(
		private http: HttpClient
	) { }

	registerNewUser(user: User): Observable<any> {
		return this.http.post<User>(this.apiUrl, user);
	}

	tryLogin(username: string, password: string): Observable<any> {
		const params = new HttpParams()
			.set('username', username)
			.set('password', password)
			.set('grant_type', 'password');

		const headers = {
			'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
			'Content-Type': 'application/x-www-form-urlencoded'
		};

		return this.http.post<any>(this.tokenUrl, params.toString(), { 'headers': headers });
	}

	isAuthenticated(): boolean {
		const token = this.retrieveToken();
		if(!token){
			return false;
		}
		return !this.jwtHelperService.isTokenExpired(token);
	}

	retrieveToken(){
		const tokenAsString = localStorage.getItem(this.ACCESS_TOKEN);
		if (!tokenAsString) {
			return null;
		}
		return JSON.parse(tokenAsString).access_token;
	}

	endSession(){
		localStorage.removeItem(this.ACCESS_TOKEN);
	}

	getAuthenticatedUser(): string{
		const token = this.retrieveToken();
		if(!token){
			return null;
		}
		return this.jwtHelperService.decodeToken(token).user_name;
	}
}

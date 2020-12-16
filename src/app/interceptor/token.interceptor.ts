import {
	HttpEvent, HttpHandler,

	HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	private headers: any = null;

	constructor(
		private router: Router
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(this.cloneRequestWithBearerTokenOnHeader(request));
	}

	private cloneRequestWithBearerTokenOnHeader(request: HttpRequest<unknown>) {
		const token = localStorage.getItem('access_token');
		if (token) {
			const jsonToken = JSON.parse(token);
			const jwt = jsonToken.access_token;

			return request.clone({
				setHeaders: {
					Authorization: 'Bearer ' + jwt
				}
			});
		}
 
		return request;
	}
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(this.cloneRequestWithBearerTokenOnHeader(request));
	}

	private cloneRequestWithBearerTokenOnHeader(request: HttpRequest<unknown>) {
		const token = localStorage.getItem('access_token');
		const url = request.url;

		if (!url.endsWith(environment.tokenUrl) && token) {
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

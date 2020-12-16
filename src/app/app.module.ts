import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ServiceOrderModule } from './service-order/service-order.module';
import { AuthService } from './services/auth.service';
import { ClientsService } from './services/clients.service';
import { ServiceOrderService } from './services/service-order.service';
import { TemplateModule } from './template/template.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		TemplateModule,
		ClientsModule,
		ServiceOrderModule,
		FormsModule
	],
	providers: [
		AuthService,
		ClientsService,
		ServiceOrderService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }

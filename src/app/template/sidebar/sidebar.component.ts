import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	loggedUser: string;

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.loggedUser = this.authService.getAuthenticatedUser();
	}

	logout(event: Event) {
		event.preventDefault();
		this.authService.endSession();
		this.router.navigate(['/login']);
	}
}

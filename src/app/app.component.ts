import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	title = 'client-app-ui';

	ngAfterViewInit(): void {
		(function ($) {
			"use strict";

			$("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
				$(this).on("click", function () {

					// Removing from all itens
					$("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () { $(this).removeClass("active"); });

					// Add active state to sidbar nav links
					var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
					if (this.href == path) {
						$(this).addClass("active");
					}
				});
			});

			// Toggle the side navigation
			$("#sidebarToggle").on("click", function (e) {
				e.preventDefault();
				$("body").toggleClass("sb-sidenav-toggled");
			});
		})(jQuery);
	}
}

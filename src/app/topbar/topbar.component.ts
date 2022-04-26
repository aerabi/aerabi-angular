import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {
  githubLink = 'https://github.com/aerabi';
  linkedInLink = 'https://www.linkedin.com/in/aerabi';
  twitterLink = 'https://mobile.twitter.com/MohammadAliEN';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public auth: AuthService) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/github.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/twitter.svg'));
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({returnTo: window.location.origin});
  }

}

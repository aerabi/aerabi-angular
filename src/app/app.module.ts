import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './greeting/greeting.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import {StoreModule} from '@ngrx/store';
import {userDataReducer} from './user-data.reducer';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import {AuthModule} from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    GreetingComponent,
    TabsComponent,
    AboutComponent,
    ProjectsComponent,
    ResearchComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule.forRoot(environment.authConfig),
    BrowserAnimationsModule,
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forRoot({ userData: userDataReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

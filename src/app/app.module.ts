/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/** Components */
import { Wrapper } from './components/wrapper/wrapper.component';
import { Landing } from './components/landing/landing.component';
import { Header } from './components/header/header.component';

/** Third Party Angular */
import { AUTH_PROVIDERS } from 'angular2-jwt';
import '../node_modules/rxjs/add/operator/toPromise';
// import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

/** Services */
import { Authentification } from './services/authentification/authentification.service';
import { Firebase } from './services/firebase/firebase.service';

/** Routes */
import { routes } from './app.routes';

/** Firebase */
import './resources/lib/firebase/firebase.js';
declare const firebase: any;

/** Firebase Config */
const firebaseConfig = {
	apiKey: 'AIzaSyCI0e6cf2Ybrs6yZ-98HrsCLMqmpu4kp1g',
	authDomain: 'it-forum-da016.firebaseapp.com',
	databaseURL: 'https://it-forum-da016.firebaseio.com',
	storageBucket: 'it-forum-da016.appspot.com',
	messagingSenderId: '344282004742'
};

firebase.initializeApp(firebaseConfig);


@NgModule({
	imports: [FormsModule, HttpModule, BrowserModule, RouterModule.forRoot(routes)],
	declarations: [Wrapper, Landing, Header],
	bootstrap: [Wrapper],
	providers: [Firebase, Authentification, ...AUTH_PROVIDERS]
})
export class AppModule { }

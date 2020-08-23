import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { HomeComponent } from './pages/home/home.component'
import { CardComponent } from './pages/card/card.component'
import { NavComponent } from './pages/nav/nav.component'

@NgModule({
	declarations: [HomeComponent, CardComponent, NavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		MatProgressBarModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule
	],
	providers: [],
	bootstrap: [NavComponent]
})
export class AppModule {}

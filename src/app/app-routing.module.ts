import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { CardComponent } from './pages/card/card.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'card/:id',
		component: CardComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

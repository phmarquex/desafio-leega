import { Component, OnInit } from '@angular/core'
import { CardsService } from '../../services/api/cards.service'
import { Card } from '../../models/card'
import { Router } from '@angular/router'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	title: string = 'brasilprev'
	loading: boolean = true
	cards: Array<Card> = []
	search: string
	searchBar: boolean = false

	constructor(private cardsService: CardsService, private router: Router) {}
	ngOnInit(): void {
		this.getCards()
	}

	async getCards(): Promise<void> {
		const response = await this.cardsService.getCards()
		const { cards } = response.data
		cards.sort((a: Card, b: Card) => '' + a.name.localeCompare(b.name))
		this.loading = false
		this.cards = cards
	}

	async findCardsByName(): Promise<void> {
		this.searchBar = false
		this.loading = true

		if (this.search.length === 0) {
			this.getCards()
		} else {
			const response = await this.cardsService.findCards(this.search)
			const { cards } = response.data
			cards.sort((a: Card, b: Card) => '' + a.name.localeCompare(b.name))
			this.loading = false
			this.cards = cards
			this.search = ''
		}
	}

	navigate(id: string): void {
		this.router.navigate(['/card/' + id])
		console.log(id)
	}
}

import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CardsService } from '../../services/api/cards.service'
import { Card } from '../../models/card'
import { Router } from '@angular/router'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	title: string = 'Lista de Cartas'
	loading: boolean = true
	cards: Array<Card> = [
		{
			id: 'Carregando...',
			name: 'Carregando...',
			nationalPokedexNumber: 0,
			imageUrl: '',
			imageUrlHiRes: '',
			types: [],
			supertype: 'Carregando...',
			subtype: 'Carregando...',
			evolvesFrom: 'Carregando...',
			hp: 'Carregando...',
			number: 'Carregando...',
			artist: 'Carregando...',
			rarity: 'Carregando...',
			series: 'Carregando...',
			set: 'Carregando...',
			setCode: 'Carregando...',
			attacks: [],
			weaknesses: [],
			resistances: []
		},
		{
			id: 'Carregando...',
			name: 'Carregando...',
			nationalPokedexNumber: 0,
			imageUrl: '',
			imageUrlHiRes: '',
			types: [],
			supertype: 'Carregando...',
			subtype: 'Carregando...',
			evolvesFrom: 'Carregando...',
			hp: 'Carregando...',
			number: 'Carregando...',
			artist: 'Carregando...',
			rarity: 'Carregando...',
			series: 'Carregando...',
			set: 'Carregando...',
			setCode: 'Carregando...',
			attacks: [],
			weaknesses: [],
			resistances: []
		},
		{
			id: 'Carregando...',
			name: 'Carregando...',
			nationalPokedexNumber: 0,
			imageUrl: '',
			imageUrlHiRes: '',
			types: [],
			supertype: 'Carregando...',
			subtype: 'Carregando...',
			evolvesFrom: 'Carregando...',
			hp: 'Carregando...',
			number: 'Carregando...',
			artist: 'Carregando...',
			rarity: 'Carregando...',
			series: 'Carregando...',
			set: 'Carregando...',
			setCode: 'Carregando...',
			attacks: [],
			weaknesses: [],
			resistances: []
		},
		{
			id: 'Carregando...',
			name: 'Carregando...',
			nationalPokedexNumber: 0,
			imageUrl: '',
			imageUrlHiRes: '',
			types: [],
			supertype: 'Carregando...',
			subtype: 'Carregando...',
			evolvesFrom: 'Carregando...',
			hp: 'Carregando...',
			number: 'Carregando...',
			artist: 'Carregando...',
			rarity: 'Carregando...',
			series: 'Carregando...',
			set: 'Carregando...',
			setCode: 'Carregando...',
			attacks: [],
			weaknesses: [],
			resistances: []
		}
	]
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
			await this.getCards()
		} else {
			const response = await this.cardsService.findCards(this.search)
			const { cards } = response.data
			cards.sort((a: Card, b: Card) => '' + a.name.localeCompare(b.name))
			this.loading = false
			this.cards = cards
			this.search = ''
		}
	}

	navigate(id: string): boolean {
		this.router.navigate(['/card/' + id])
		return true
	}
}

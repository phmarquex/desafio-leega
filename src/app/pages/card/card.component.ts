import { Component, OnInit } from '@angular/core'
import { Card } from '../../models/card'
import { CardsService } from 'src/app/services/api/cards.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
	loading: boolean = false
	error: boolean = false
	id: string = ''
	card: Card = {
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

	constructor(
		private cardsService: CardsService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.route.params.forEach(({ id }: Params) => {
			this.id = id
		})
	}
	ngOnInit(): void {
		this.loadCard()
	}

	async loadCard(): Promise<void> {
		try {
			const response = await this.cardsService.findCard(this.id)
			const { card } = response.data
			this.loading = false
			this.card = card
		} catch (error) {
			this.error = true
		}
	}

	navigateBack(): boolean {
		this.router.navigate([''])
		return true
	}
}

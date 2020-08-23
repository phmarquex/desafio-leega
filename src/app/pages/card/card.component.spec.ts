import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('CardComponent', () => {
	let component: CardComponent
	let fixture: ComponentFixture<CardComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardComponent],
			imports: [RouterTestingModule]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should have loading as false', () => {
		expect(component.loading).toBe(false)
	})

	it('should have error as false', () => {
		expect(component.error).toBe(false)
	})

	it('should have id as undefined', () => {
		expect(component.id).toBe(undefined)
	})

	it('should have card as Card element', () => {
		expect(component.card).toEqual({
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
		})
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should init component', async () => {
		component.ngOnInit()
		expect(component.card.id).toEqual('Carregando...')
	})

	it('should navigate back to homepage', () => {
		expect(component.navigateBack()).toBeTruthy()
	})

	it('should load card', async () => {
		component.id = 'dp1-3'
		await component.loadCard()
		expect(component.card.id).toEqual(component.id)
	})

	it('should not load card', async () => {
		component.id = 'dp1-3potato'
		await component.loadCard()
		expect(component.card.id).toEqual('Carregando...')
		expect(component.error).toEqual(true)
	})
})

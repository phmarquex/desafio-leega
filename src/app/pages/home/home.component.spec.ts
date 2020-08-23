import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
	let component: HomeComponent
	let fixture: ComponentFixture<HomeComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeComponent],
			imports: [RouterTestingModule]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create the app', () => {
		expect(component).toBeTruthy()
	})

	it(`should have as title 'Lista de Cartas'`, () => {
		expect(component.title).toEqual('Lista de Cartas')
	})

	it(`should have as loading as TRUE`, () => {
		expect(component.loading).toEqual(true)
	})

	it(`should have as searchBar as FALSE`, () => {
		expect(component.searchBar).toEqual(false)
	})

	it(`should have as cards as Default values`, () => {
		const cardLength: number = 4
		expect(component.cards.length).toEqual(cardLength)
	})

	it('should render title', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#title').textContent).toContain(
			'Lista de Cartas'
		)
	})

	it('should ngInit component', () => {
		expect(component.loading).toBe(true)
	})

	it('should get all cards', async () => {
		await component.getCards()
		expect(component.cards.length).toBeGreaterThan(4)
	})

	it('should find cards by name', async () => {
		component.search = 'pika'
		await component.findCardsByName()
		expect(component.cards.length).toBeGreaterThan(4)
	})

	it('should not load card when search field is empty', async () => {
		component.search = ''
		await component.findCardsByName()
		expect(component.cards.length).toBeGreaterThan(4)
	})

	it('should navigate to card page', async () => {
		expect(component.navigate('teste')).toEqual(true)
	})
})

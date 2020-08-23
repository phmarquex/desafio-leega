export interface Card {
	id: string
	name: string
	nationalPokedexNumber: number
	imageUrl: string
	imageUrlHiRes: string
	types: Array<string>
	supertype: string
	subtype: string
	evolvesFrom: string
	hp: string
	number: string
	artist: string
	rarity: string
	series: string
	set: string
	setCode: string
	attacks: Array<{
		cost: Array<string>
		name: string
		text: string
		damage: string
		convertedEnergyCost: number
	}>
	weaknesses: Array<{
		type: string
		value: string
	}>
}

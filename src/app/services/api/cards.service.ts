import { Injectable } from '@angular/core'
import api from '../api'
import { AxiosResponse } from 'axios'

@Injectable({
	providedIn: 'root'
})
export class CardsService {
	constructor() {}

	async getCards(): Promise<AxiosResponse> {
		const response = await api.get(`/cards`)
		return response
	}

	async findCards(text: string): Promise<AxiosResponse> {
		const response = await api.get(`/cards?name=${text}`)
		return response
	}

	async findCard(id: string): Promise<AxiosResponse> {
		const response = await api.get(`/cards/${id}`)
		return response
	}
}

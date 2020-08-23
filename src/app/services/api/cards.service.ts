import { Injectable } from '@angular/core'
import api from '../api'
import { AxiosResponse } from 'axios'

@Injectable({
	providedIn: 'root'
})
export class CardsService {
	constructor() {}

	async getCards(): Promise<AxiosResponse> {
		return await api.get(`/cards?contains=types`)
	}

	async findCards(text: string): Promise<AxiosResponse> {
		return await api.get(`/cards?contains=types&name=${text}`)
	}

	async findCard(id: string): Promise<AxiosResponse> {
		try {
			return await api.get(`/cards/${id}`)
		} catch (error) {
			throw error
		}
	}
}

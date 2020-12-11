import { Client } from '../models/client';

export class ServiceOrderFilter {
	id: number;
	description: string;
	price: number;
	providedAt: string;
	client: Client;
}
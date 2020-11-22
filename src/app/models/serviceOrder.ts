import { Client } from './client';

export class ServiceOrder {
    id: number;
    description: string;
    price: string;
	providedAt: string;
	client: Client;
}
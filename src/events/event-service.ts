import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/Event';

class EventService {
	async getEventById(id: string): Promise<IEvent | null> {
		return await EventModel.findById(id).exec();
	}

	async getEvents(): Promise<IEvent[]> {
		return await EventModel.find().exec();
	}

	async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {
		const { name, description, date, city, duration } = createEventDto;
		const newEvent = new EventModel({
			name,
			description,
			date: new Date(date),
			city,
			duration,
		});

		await newEvent.save();
		return newEvent;
	}
}

export default EventService;

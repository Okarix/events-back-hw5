import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/Event';

class EventService {
	async getEventById(id: string): Promise<IEvent | null> {
		return await EventModel.findById(id).exec();
	}

	async getEvents(page: number = 1, sort: string = 'desc'): Promise<IEvent[]> {
		var perPage = 10;
		const skip = perPage * (page - 1);

		return await EventModel.find().limit(perPage).skip(skip).sort(sort).exec();
	}

	async getEventsByCity(city: string): Promise<IEvent[]> {
		return await EventModel.find({ city }).exec();
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

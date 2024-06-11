import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:admin12345@cluster0.xn2zx35.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0');
		console.log('MongoDB connected...');
	} catch (err: any) {
		console.error(err.message);
		process.exit(1);
	}
};

export default connectDB;

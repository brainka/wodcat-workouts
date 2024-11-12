const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const WorkoutData = require('./models/WorkoutData');

dotenv.config();

const dataFetchAndSave = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);

		const response = await axios.get(process.env.API_URL);
		const data = await response.data.results;

		for (const workout of data) {
			console.log(workout);
			const newWorkout = new WorkoutData(workout);

			await newWorkout.save();
		}

		await mongoose.disconnect();

		console.log(data);
	} catch (error) {
		console.log('API Error - error fetching api');

		if (error.request) {
			console.log('API request error', error.request);
		} else if (error.response) {
			console.log('API response error', error.response.data);
		} else {
			console.log('API error - General', error.message);
		}
	}
};

dataFetchAndSave();

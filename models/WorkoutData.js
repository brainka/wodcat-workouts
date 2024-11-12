const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
	id: Number,
	slug: String,
	present_value_measurement: String,
	type_measurement: {
		id: String,
		name: String,
	},
	repetitions: String,
	name: String,
	man: String,
	woman: String,
	units: String,
	unit_exercises: {
		id: String,
		name: String,
	},
});

const workoutResultsSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	is_favorite: Number,
	is_completed: Number,
	is_private: Boolean,
	tags: String,
	headline: String,
	general_scheme: String,
	scheme_repeats: Number,
	modality: String,
	duration: Number,
	exercises: [exerciseSchema],
	muscles: String,
	results_count: Number,
	my_ratings: Number,
	ratings_count: Number,
	summary_rating: Number,
	comments_count: Number,
});

const WorkoutData = mongoose.model(
	'WorkoutData',
	workoutResultsSchema,
	'wod_cat_workouts'
);

module.exports = WorkoutData;

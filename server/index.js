const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

const app = express();

// Connect to DB
connectDB();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'dev',
	})
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));

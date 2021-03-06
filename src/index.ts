import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import * as mongoConnect from 'connect-mongo';
import * as session from 'express-session';
import { Request, Response, NextFunction } from 'express';

var mongoStore = mongoConnect(session);
mongoose.connect('mongodb://localhost/nursing_scheduler_db');
var app = express();

// create http and https versions
var server = new http.Server(app);
server.timeout = 3000;

app.get('*', (req, res) => {
	// todo: make this a 404 
	res.send("Testing 1, 2...")
});

let port: number = 3000;
server.listen(port, () => {
	console.log('Nurse scheduler server started on port', port, '...');
});
import * as React from 'react';
const FullCalendar = require('fullcalendar-reactwrapper');
const fullcalendarCSS = require('../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css');
import './App.css';
import { Stats } from 'fs';

const logo = require('./logo.svg');

interface State {
	events: [{}];
}

class App extends React.Component<{}, State> {

	constructor() {
		super({}, {});

		this.state = {
			events: [
				{
					title: 'All Day Event',
					start: '2018-01-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2018-01-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2018-01-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2018-01-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2018-01-11',
					end: '2018-01-13'
				},
				{
					title: 'Meeting',
					start: '2018-01-12T10:30:00',
					end: '2018-01-12T12:30:00'
				},
				{
					title: 'Clinicals',
					start: '2018-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2018-01-28'
				},
				{
					title: 'Conference',
					start: '2018-01-11',
					end: '2018-01-13'
				},
				{
					title: 'Meeting',
					start: '2018-01-12T10:30:00',
					end: '2018-01-12T12:30:00'
				},
				{
					title: 'Clinicals',
					start: '2018-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2018-01-28'
				},
				{
					title: 'All Day Event',
					start: '2018-01-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2018-01-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2018-01-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2018-01-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2018-01-11',
					end: '2018-01-13'
				},
				{
					title: 'Meeting',
					start: '2018-01-12T10:30:00',
					end: '2018-01-12T12:30:00'
				},
				{
					title: 'Clinicals',
					start: '2018-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2018-01-28'
				},
				{
					title: 'Conference',
					start: '2018-01-11',
					end: '2018-01-13'
				},
				{
					title: 'Meeting',
					start: '2018-01-12T10:30:00',
					end: '2018-01-12T12:30:00'
				},
				{
					title: 'Clinicals',
					start: '2018-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2018-01-28'
				}
			],
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Nursing Scheduler</h1>
				</header>
				<div className="calendar" />
				<FullCalendar
					id="your-custom-ID"
					header={{
						left: 'prev,next today myCustomButton',
						center: 'title',
						right: 'month,basicWeek,basicDay'
					}}
					// defaultDate={'2017-09-12'}
					navLinks={true} // can click day/week names to navigate views
					editable={true}
					eventLimit={true} // allow "more" link when too many events
					events={this.state.events}
				/>
			</div>
		);
	}
}

export default App;

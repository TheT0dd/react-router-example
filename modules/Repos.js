import React from 'react';
import NavLink from './NavLink';
import history from './History';

class Repos extends React.Component {

	// add this method
	handleSubmit(event) {
		event.preventDefault();
		const userName = event.target.elements[0].value;
		const repo = event.target.elements[1].value;
		const path = `/repos/${userName}/${repo}`;

		// OPTION 1: import history from our custom history module
		history.push(path);

		// OPTION 2: assume browserHistory is used
		// (with care, should be same as history passed in router)
		// browserHistory.push(path)
	}

	render() {
		return (
			<div>
				<h2>Repos</h2>

				<ul>
					<li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
					<li><NavLink to="/repos/facebook/react">React</NavLink></li>
					<li>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="userName"/>/ {' '}
							<input type="text" placeholder="repo"/>{' '}
							<button type="submit">Go</button>
						</form>
					</li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default Repos;

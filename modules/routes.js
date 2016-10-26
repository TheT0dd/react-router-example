import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './History';
import App from './App';
import Home from './Home';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/repos" component={Repos}>
			<Route path="/repos/:userName/:repoName" component={Repo}/>
		</Route>
		<Route path="/about" component={About}/>
	</Route>
);

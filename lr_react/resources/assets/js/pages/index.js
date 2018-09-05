import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {routesMap}  from '../router'
import '../../../../public/js/functions.js';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router >
                    <div>
                        <Header />
                        <main>
                            {routesMap}
                        </main>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, HashRouter, IndexRoute } from 'react-router-dom';

/* These import for Meterial design */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* End */

import TopHeaderNav from './components/navigations/TopHeaderNav';
import Registration from "./components/registration/Registration";
import CustomValidation from "./components/validation-custom/CustomValidation";
import ReduxValidation from "./components/validation-redux/ReduxValidation";
import css from "./styles/app.css";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <TopHeaderNav />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Registration} />
                                <Route path="/registration" component={CustomValidation} />
                                <Route path="/dashboard" component={ReduxValidation} />
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        )
    }
};

ReactDOM.render(< App />, document.getElementById('root'));
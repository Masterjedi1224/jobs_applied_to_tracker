import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import DisplayJobsAppliedTo from "./routes/Display.Jobs.Applied.To";
import DisplayJobAppliedTo from './routes/View.Job.Applied.To';
import AddEditJob from './routes/Add.Job';
import {Link} from 'react-router-dom';
import PathDoesNotExist from "./components/Path.Does.Not.Exists";
import Header from './components/Header';

const ShowApp = (props) => (

            <div>
                <h1>Hi</h1>
            </div>
);

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={DisplayJobsAppliedTo} />
              <Route exact path="/view_job/:id"  render={(props) => (
                  <DisplayJobAppliedTo {...props} pass_to_page_content='Hi' />)}></Route>
              <Route path="/edit_job/:id" component={AddEditJob} />
              <Route path="/add_job" component={AddEditJob}  />
              <Route component={PathDoesNotExist} />
          </Switch>
      </Router>

  );
}

export default App;

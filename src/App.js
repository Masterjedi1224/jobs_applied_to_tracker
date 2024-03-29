import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DisplayJobsAppliedTo from "./routes/Display.Jobs.Applied.To";
import DisplayJobAppliedTo from './routes/View.Job.Applied.To';
import AddEditJob from './routes/Add.Edit.Job';
import PathDoesNotExist from "./components/Path.Does.Not.Exists";
import Header from './components/Header';

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

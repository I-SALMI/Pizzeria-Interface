import React from 'react';
import './App.css';
import 'bootstrap-4-react';
import PizzaList from '../components/pizza-list/pizza-list';
import Form from '../components/form/form';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        robots: [],
        searchfield: ''
    }
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots: users})});
}
  render()
    {return (
      <div className="container">
        <div class="text-center">
          <h2 class="jumbotron">Pizzeria</h2>
        </div>
        <div class="row">
          <div class="col-md-7">
            <Form/>
          </div>
          <div class="col-md-5">
            <PizzaList/>
          </div>
        </div>
    </div>
    );}
}

export default App;

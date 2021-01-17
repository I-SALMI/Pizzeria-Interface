import React from 'react'
import {ingredients} from './ingredients.js';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        ingredients: []
      }
    }
  
    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }
  
    onIngredientsChange = (event) => {
      this.setState({ingredients: event.target.value})
    }
  
  
    onSubmit = () => {
      fetch('http://localhost:3000/pizzeria/pizza', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.name,
          ingredients: this.state.ingredients
        })
      })
        .then(response => response.json())
    }

    render()
    {
      return (
        <form action="/pizzeria/pizza" method='POST'>
          <div className="form-group">
            <label>Name</label>
            <input class="form-control" placeholder="Pizza name" onChange={this.onNameChange} required/>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect2">Select ingredients for your pizza</label>
            <select multiple class="form-control" id="exampleFormControlSelect2" onChange={this.onIngredientsChange}>
              {
                ingredients.map(el => 
                  <option>{el.name}: {el.price} eur</option>
                )
              }
            </select>
          </div>

          <div class="form-group">
            <button class="btn btn-default" type="submit" onClick={this.onSubmit}>
              <i class="fa fa-floppy-o"></i>
              Submit</button>
          </div>
        </form>
    )}
}

export default Form

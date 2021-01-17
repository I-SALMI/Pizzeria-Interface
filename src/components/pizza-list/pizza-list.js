import React from 'react';
import {pizzas} from './pizza.js';

function PizzaList() {
  return (
  <div>  
    <h6 class="text-center">Pizza menu</h6><br/>
    {
      pizzas.map(el => 
        <table class="table table-sm table-hover">
          <tr>
              <td>{el.name}</td>
              <td>{el.price}</td>
          </tr>
          <tr>
            
          </tr>
        </table>
      )
    }
  </div>
  );
}

export default PizzaList;

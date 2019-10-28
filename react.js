// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

import React, { Component } from 'react';

class Component1 extends Component {
  render(){
    <div>
      <p>"I am a component!"</p>
    </div>
  }
}

export default Component1;

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

//original
for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}
//refactor:
names.map(element => (console.log(`${element} is ${element.length} characters long.`)))


// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

let { name, home, dislikes } = this.state
console.log(name);
console.log(home);
console.log(dislikes);


// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

addOne(){
  newCount = this.state.count + 1;
  this.setState({count: newCount})
}


// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes{
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
    }
  }

  render() {
    // Mistake 2: receipe is out of scope. Need to deconstruct or use this.state to make recipes available
    let { recipes } = this.state
    let recipe = recipes.map(recipe => {
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return(
      // Mistake 1: need to return JSX inside return, and have everything in one tag
      // let recipe = recipes.map(recipe => {
      //   return(
      //     <li key={recipe.name}>{recipe.name}</li>
      //   )
      // })
      <ul>
        {recipe}
      </ul>
    )
  }
}
export default Recipes

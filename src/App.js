import React, { Component } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Modal from 'react-bootstrap/lib/Modal';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class App extends Component {

  state = {
    recipes: [
      {recipeName: 'Drew', ingredients: ['haitian', 'athletic', 'tough']},
      {recipeName: 'Drew2', ingredients: ['haitian', 'athletic', 'tough']},
      {recipeName: 'Drew3', ingredients: ['haitian', 'athletic', 'tough']}
    ],
    showAdd: false
  }
  //Deletes a recipe
  deleteRecipe(index){
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
  }

  //Closes Modal
  close = () => {
    if(this.state.showAdd){
      this.setState({showAdd: false})
    }
  }

  //Opens Modal
  open = (state) => {
    this.setState({[state]: true})
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className="App container">
        <PanelGroup accordion>
          {recipes.map((recipe, index) =>(
            <Panel eventKey={index}>
              <Panel.Heading>
                <Panel.Title toggle>{recipe.recipeName}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ul>
                {recipe.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                </ul>
                <ButtonToolbar>
                  <Button bsStyle="danger" onClick={(event) => this.deleteRecipe(index)}>Delete Recipe</Button>
                  <Button bsStyle="default">Edit Recipe</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>

        <Modal show={this.state.showAdd} onHide={this.close}>
                  
        </Modal>

        <Button bsStyle = "primary" onClick={(event) => this.open("showAdd")}>Add Recipe</Button>
      </div>
    );
    }
  }

export default App;

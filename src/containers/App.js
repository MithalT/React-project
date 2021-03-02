import React, {Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';
import AuthContext from  '../context/auth-context';

class App extends Component{
  constructor(props){
    super(props);
    console.log('[app.js] constructor');
  }
  state = {persons : [
    {id:'1' , name : "Mithal" , age : 30},
    {id:'2' ,name : "Lara" ,age : 25},
    {id:'3' ,name : "Ali" , age : 29}
  ], otherState : 'Some other Values',
     showPersons: false,
     showCockpit: true,
     changeCounter:0,
     authenticated: false
    };
  static  getDerivedStateFromProps (props, state){
    console.log('[app.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount(){
    console.log('[app.js] componentDidMount');

  }
  componentDidUpdate(){
    console.log('[app.js] componentDidUpdate');

  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[app.js] shouldComponentUpdate');
    return true;
  }
  
   onChangedHandler = (event, id)=> {
     const personIndex = this.state.persons.findIndex(
      (p) => {return p.id === id}
     )

     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value
     const persons = this.state.persons;
     persons[personIndex] = person;
     this.setState(
      (pervState, props) => {
              return {
                    persons: persons, 
                    changeCounter: pervState.changeCounter + 1
                }
             }
        );
  }

     togglePersonsHandler =  () =>{
        this.setState({showPersons : ! this.state.showPersons});
      }
      deletePersonHandler = (personIndex) =>{
          const persons = [...this.state.persons];
          persons.splice(personIndex,1);
          this.setState({persons: persons});
      }
      loginHandler  = () =>{
          this.setState({authenticated :true});
      }
      render(){
        console.log('[app.js] render');
        let persons = null ;
       
        if(this.state.showPersons === true) {
          persons =
                <Persons persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.onChangedHandler}
                 isAuthenticated ={this.state.authenticated}
                 />
        }
      return (
     <Auxilliary>
          <button onClick = { () => {
            this.setState({showCockpit : false});
          }
          }>Remove Cockpit</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
             login : this.loginHandler}}>
         {this.state.showCockpit ?  
          <Cockpit
          title ={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons ={this.state.persons}
            clicked ={this.togglePersonsHandler}
            /> : null }
            {persons}
            </AuthContext.Provider>
       </Auxilliary> 
    
      )
    }
    // return React.createElement('div', {className: 'App'},  React.createElement('h1',null,  'Helllo'));
  
}

export default withClass(App, classes.App);

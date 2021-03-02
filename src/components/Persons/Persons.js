import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component{
    state = {};
    static  getDerivedStateFromProps (props, state){
        console.log('[persons.js] getDerivedStateFromProps', props);
        return state;
      }
     /* shouldComponentUpdate(nextProps, nextState){
        console.log('[persons.js] shouldComponentUpdate');
   if(      nextProps.persons !== this.props.persons || 
            nextProps.changed != this.props.changed ||
            nextProps.clicked != this.props.clicked
            ){
            return true;
        }else{
            return false;
        }
      }*/
      getSnapshotBeforeUpdate(prevProps,pervState){
        console.log('[persons.js] getSnapshotBeforeUpdate');
     return null;
    }
      componentDidUpdate(prevProps,pervState,snapshot){
        console.log('[persons.js] componentDidUpdate');
        console.log(snapshot);
      }
      componentWillUnmount(){
        console.log('[persons.js] componentWillUnmount');
      }
     
  render(){
    console.log('[persons.js] rendering...');

         return this.props.persons.map(
            (person, index )=> {
                console.log('[persons.js] rendering..');
                    return <Person key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age= {person.age}
                    changed = {(event) => this.props.changed(event ,person.id)}
                
                    />
                    });
        }

    }
export default Persons;
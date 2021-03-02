import React,{Component }from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css'
import Auxilliary from '../../../hoc/Auxilliary';
import PropTypes from 'prop-types';
import AuthContext from  '../../../context/auth-context';


class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        return(
        <Auxilliary >
                { this.context.authenticated ? <h1>Authenticated</h1> : <h1>Please Login !!</h1>}
            <p key="i1" onClick={this.props.click}>i'm  {this.props.name} and i'm {this.props.age} Years Old!!</p>
            <p key="i2">{this.props.children}</p>
            <input ref={this.inputElementRef} key="i3" type="text" onChange ={this.props.changed}/>
        </Auxilliary>  
        )   
        }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
}
export default withClass(Person, classes.person);
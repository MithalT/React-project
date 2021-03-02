import React , {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from  '../../context/auth-context';


const Cockpit = props =>{
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    //useEffect run after render
    useEffect(() =>{
            console.log('[Cockpit.js] useEffect');
            //http request...
          // setTimeout(() => {
                //alert('saved data to cloud!');
          //  }, 1000);
          toggleBtnRef.current.click();
            return ()=>{
                console.log('[Cockpit.js] cleanup work in useEffect');}
        } , []);
        useEffect(
            ()=>{
                console.log('[Cockpit.js] second useEffect');
                return ()=>{ console.log('[Cockpit.js] cleanup work in 2nd useEffect');}
            }
        );
    let assignedClasses = [];
    let btnClass = classes.bold;
    if(props.showPersons){
        btnClass = classes.red;
    }
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
    <div className={classes.Cockpit}>
        <h1 className={assignedClasses.join(' ')}> {props.title}</h1>
        <button ref={toggleBtnRef} className={btnClass}  onClick = {props.clicked} >switch name</button>
            <button onClick={authContext.login}>log in</button>
    </div>
    );
};
export default React.memo(Cockpit);
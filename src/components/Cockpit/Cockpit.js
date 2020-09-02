import React, { useEffect , useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const toggleBtnRef = useRef();

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout ( () => {
    //   alert('Saved data to Cloud!');
    // } , 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup Work in UseEffect');
    };
  }, []);

  useEffect ( () => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup Work in UseEffect');
    };
  });
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Login</button>
        </div>
    );
};

export default React.memo(cockpit);
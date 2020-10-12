import React, {useState} from 'react';
import './App.css';
import styles from './Transition.css';
import {CSSTransition} from "react-transition-group";

interface InternalState {
    open: boolean;
    content: string;
}

function App() {
    const [{open, content}, setState] = useState<InternalState>({
        open: false,
        content: "Initial content",
    });

    const setOpen = (open) => {
        setState(oldState => ({...oldState, open}))
    };
    
    return (
        <div className="App">
            <button onClick={() => setOpen(!open)} data-testid="clickbutton">Click me</button>
            <CSSTransition
                in={open}
                timeout={500}
                mountOnEnter
                unmountOnExit
                classNames={{...styles}}
            >
                <div className="App-div">
                    {content}
                </div>
            </CSSTransition>
        </div>
    );
}

export default App;

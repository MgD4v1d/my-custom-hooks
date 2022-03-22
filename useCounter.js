import { useState } from 'react';

export const useCounter = (initalState = 10) => {
  
    const [counter, setCounter] = useState(initalState);


    // const increment = ( factor = 1) => {
    //     setCounter(state +factor);
    // }

    const increment = () => {
        setCounter(counter +1);
    }

    const reset = () => {
        setCounter(initalState);
    }

    // const decrement = (factor = 1) => {
    //     setCounter( state -factor);
    // }

    const decrement = () => {
        setCounter( counter -1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };

}

import React, {useState, useEffect, useRef} from 'react';


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef (null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning])

    return(<Stopwatch />);
}
export default Stopwatch
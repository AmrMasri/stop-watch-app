import React, {useState, useEffect, useRef} from 'react';


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef (null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning])

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){

    }

    return(
       <div className='stopwatch'>
           
       </div>
    );
}
export default Stopwatch
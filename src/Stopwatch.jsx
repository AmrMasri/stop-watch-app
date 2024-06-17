import React, {useState, useEffect, useRef} from 'react';


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef (null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){

        return `00:00:00`;
    }

    return(
       <div className='stopwatch'>
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>stop</button>
                <button onClick={reset} className='reset-button'>reset</button>
            </div>
       </div>
    );
}
export default Stopwatch
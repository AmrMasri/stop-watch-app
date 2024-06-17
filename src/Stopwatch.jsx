import React, {useState, useEffect, useRef} from 'react';


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef (null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }


    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){

        let hours = math.floor( elapsedTime / (1000 * 60 * 60))
        let minutes = math.floor( elapsedTime / (1000 * 60 ) % 60)
        let seconds = math.floor( elapsedTime / (1000) % 60)
        let milliseconds = math.floor( elapsedTime % 1000 / 10)


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
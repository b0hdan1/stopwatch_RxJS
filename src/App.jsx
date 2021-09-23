import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import React, {useState, useEffect} from 'react';

import ShowTime from './components/ShowTime';
import RenderButtons from './components/RenderButtons.jsx';

  import './styles/App.css';

export const App = () => {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);
  const [wasClicked, setClick] = useState(false);
  const [count, setCount] = useState(0);
  let timeout;

  const isClicked = () => {
    setCount(prevState => prevState + 1);
    timeout = setTimeout(() => {
      setCount(prevState => prevState + 1);
      if (count >= 1) {
        handleStart();
        setClick(false);
        setCount(0);
        setStatus(2);
        return;
      }else {
        setClick(true);
      }
    }, 300);

    if (wasClicked) {
      setClick(false);
      clearTimeout(timeout);
    }
  }

  useEffect(() => {
    const unsubscribe = new Subject();

    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(value => value + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);

  const handleStart = () => {
    setWatchOn(prevState => !prevState);
    setStatus(1);
  }

  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false);
    }
    setTime(0);
    setStatus(0);
  }

  const handleReset = () => {
    setTime(0);
    setStatus(1);
    setWatchOn(true);
  }

  return (
    <div className="App">
      <div className='react_clock'>Stopwatch</div>
        <div className='clock'>
          <ShowTime
            time={time}
          />
          <RenderButtons
            start={handleStart}
            stop={handleStop}
            reset={handleReset}
            status={status}
            isClicked={isClicked}
          />
      </div>
    </div>
  );
}


export default App;

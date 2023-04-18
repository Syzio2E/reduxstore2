import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)

  const incrementHandler =()=>{
    dispatch({type: 'increment'})
  }
  const decrementHandler=()=>{
    dispatch({type: 'decrement'})
  }
  const incrementbytwoHandler=()=>{
    dispatch({type: 'incrementby2'})
  }
  const dercrementbytwoHandler=()=>{
    dispatch({type: 'decrementby2'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementbytwoHandler}>IncrementByTwo</button>
      <button onClick={dercrementbytwoHandler}>decrementByTwo</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

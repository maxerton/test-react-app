import {useState} from 'react';
import Button from './../Button/Button'

const Counter = ({start=0, title=''}) => {
  const [counter, setCounter] = useState(start);

  const inc = () => {
    setCounter(counter + 1);
  }
  
  const dec = () => {
    setCounter(counter - 1);
  }
  return (
    <div className='counterName'>
      <h3>{title}</h3>
      <Button onClick={ inc }>
        <i className="fa-solid fa-plus"></i>
      </Button>

      <div className="counter">{ counter }</div>

      <Button onClick={ dec }>
        <i className="fa-solid fa-minus"></i>
      </Button>
    </div>
  );
};

export default Counter;
import './App.css';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {
    const [count, setCount] = useState([1, 2, 3, 4]);

    return (
        <div className='App'>
            <h1>{count.reduce((acc, n) => acc += n)}</h1>
            {count.map((value, idx) => (
                <Counter
                    key={idx}
                    label={`Counter ${idx}`}
                    value={value}
                    increment={() => {
                        const newCount = [...count];
                        newCount[idx] += 1
                        setCount(newCount);
                    }}
                    decrement={() => {
                        const newCount = [...count];
                        newCount[idx] -= 1
                        setCount(newCount);
                    }}
                />
            ))}
        </div>
    );
}

export default App;

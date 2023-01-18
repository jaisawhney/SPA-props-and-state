interface props {
    label: string,
    value: number,
    increment: () => void,
    decrement: () => void
}

function Counter(props: props) {

    return (
        <div className='Counter'>
            <small>{props.label}</small>
            <h1>{props.value}</h1>
            <button onClick={() => props.increment()}>+</button>
            <button onClick={() => props.decrement()}>-</button>
        </div>
    )
}

export default Counter;
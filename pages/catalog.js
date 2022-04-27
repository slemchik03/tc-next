import {useState} from 'react'

export default function Catalog() {
    const [count, setCount] = useState(0);


    return <div>

<p  className="intro__statistic-num">Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Кликни меня!
        </button>
    </div>


    

}
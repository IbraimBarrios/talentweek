import React, { useState } from 'react'

function Home() {
    const [data, setData] = useState(0);

    const array = [
        {
            id: 1,
            name: 'ibraim'
        },
        {
            id: 2, 
            name: 'Jose'
        }
    ]

const handleClick = () => {
    setData(10); 
};

  return (
    <>
        <div>Este es mi home</div>
        <span>{data}</span>
        <button onClick={handleClick}>Transformamos A</button>

        <span>Name list</span>
        <ul>
            {array.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default Home
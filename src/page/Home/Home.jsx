import React, { useState } from 'react'

function Home() {
    const [data, setData] = useState(0);

const handleClick = () => {
    setData(10); 
};

  return (
    <>
        <div>Este es mi home</div>
        <span>{data}</span>
        <button onClick={handleClick}>Transformamos A</button>
    </>
  )
}

export default Home
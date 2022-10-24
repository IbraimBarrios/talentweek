import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
        console.log(data);

        //Cuando el componente se destruye
        // return () => {
        //     console.log('se marcho');
        // }

       //arreglo de dependencia (Vienen del estado)
       //Nota: si no se le pone nada, solo se ejecuta una vez (al iniciar)
       //Nota: si se le agrega, Se ejecuta cada vez que cambia.
    }, [data]);

const handleClick = () => {
    setData(data + 1); 
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
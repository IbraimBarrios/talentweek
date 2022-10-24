import React, { useEffect, useState }  from "react";

function MagicCount() {
  const [data, setData] = useState(0);

  const handleClick = () => {
    setData(data + 1);
  };

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

  return (
    <>
      <span>{data}</span>
      <button onClick={handleClick}>Count</button>
    </>
  );
}

export default MagicCount;

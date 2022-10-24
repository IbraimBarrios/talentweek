import React from "react";

function MagicArray() {
  const array = [
    {
      id: 1,
      name: "ibraim",
    },
    {
      id: 2,
      name: "Jose",
    },
  ];
  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default MagicArray;


import { useState } from "react";

function SingleBot({ data, setArmy, army, canBeRemoved, index }) {
  const [isClicked, setIsClicked] = useState(false);

  function addToArmy(newData) {
    setArmy((prevData) => [...prevData, newData]); 
    setIsClicked(true); 
  }

  function removeFromArmy(index) {
    const updatedArmy = army.filter((_, i) => i !== index);
    setArmy(updatedArmy); 
  }

  return (
    <div>
      <img src={data.avatar_url} alt={data.name} />
      <h2>{data.name}</h2>
      <p>Health: {data.health}</p>
      <p>Damage: {data.damage}</p>
      <p>Armor: {data.armor}</p>
      <p>Class: {data.bot_class}</p>
      <p>Catchphrase: {data.catchphrase}</p>

      {canBeRemoved ? (
        <button onClick={() => removeFromArmy(index)}>REMOVE</button>
      ) : isClicked ? (
        ""
      ) : (
        <button onClick={() => addToArmy(data)}>ENLIST</button>
      )}
    </div>
  );
}

export default SingleBot;

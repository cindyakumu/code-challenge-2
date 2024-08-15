import SingleBot from "./SingleBot";

function BotCollection({ bots, setArmy, army }) {
  return (
    <div>
      {bots.map((item, index) => (
        <SingleBot
          data={item} 
          key={item.id} 
          setArmy={setArmy} 
          army={army} 
          canBeRemoved={false} 
          index={index} 
        />
      ))}
    </div>
  );
}

export default BotCollection;
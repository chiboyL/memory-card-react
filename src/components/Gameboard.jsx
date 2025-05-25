import Card from "./Card"
import { useState, useEffect } from "react"
function Gameboard({score, setScore, bestScore, setBestScore}) {
    const [cards, setcards] = useState([]);
    const [clickedCards, setclickedCards] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
        const fetchImage = async () => {
          setLoading(true);
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=6');
                const data = await response.json();
                console.log(data);
                const formattedData  = data.map(cat =>(
                    {
                        id: cat.id,
                        image: cat.url 
                    }

                ));
                setcards(formattedData)
            } catch{
                console.error("Error fetching data");
            } finally{setLoading(false)}
        };
        fetchImage();
      
        return () => {
          controller.abort();
          console.log('Network request cancelled');
          
        }
    }, []);
    
   
  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
        setScore(0);
        setclickedCards([]);
      }
    } else {
      setclickedCards([...clickedCards, id]);
      setScore(score + 1);
    }

    // Shuffle directly in click handler without state update
    setcards(prevCards => {
      const shuffled = [...prevCards].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  };
  return(
    <div className="game-board grid gap-5 mt-10 justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {cards.map((card) => (
    <Card
      name={card.id}
      key={card.id}
      id={card.id}
      image={card.image}
      onClick={() => handleClick(card.id)}
      onLoad={loading}
    />
  ))}
</div>
  )
}
export default Gameboard;
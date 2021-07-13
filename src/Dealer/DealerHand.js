import { useState, useEffect } from "react";
import "./DealerHand.css";

function DealerHand({ dealerHand, userStands }) {
  const [dealerValue, setDealerValue] = useState();

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < dealerHand.length; i++) {
      count += dealerHand[i].value;
    }
    setDealerValue(count);
  }, [dealerHand]);

  return (
    <div>
      {dealerHand.map((card, index) => (
        <DealerCard card={card} index={index} dealerValue={dealerValue} />
      ))}
      <div>{dealerHand.length > 0 && dealerValue}</div>
    </div>
  );
}

function DealerCard({ card, index }) {
  return (
    <div className="dealer-cards-in-hand w3-animate-right">
      <img
        src={card.image}
        key={index}
        alt={card.code}
        className="card-image"
      />
    </div>
  );
}
export default DealerHand;

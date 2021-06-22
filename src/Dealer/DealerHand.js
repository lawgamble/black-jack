import React, { useEffect } from "react";

const DealerHand = ({ dealerHand, dealerValue, setDealerValue }) => {
  useEffect(() => {
    let number = 0;
    for (let i = 0; i < dealerHand.length; i++) {
      number += dealerHand[i].value;
      setDealerValue(number);
    }
  }, [dealerHand]);

  return (
    <div>
      {dealerHand.length > 1
        ? dealerHand.map((card, index) => (
            <div className="user-hand" key={index}>
              <img src={card.image} />
            </div>
          ))
        : null}
      <div>{dealerValue}</div>
    </div>
  );
};

export default DealerHand;

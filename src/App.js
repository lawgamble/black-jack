import React, { useState, useEffect } from "react";
import "./css/App.css";
import UserHand from "./User/UserHand";
import DealerHand from "./Dealer/DealerHand";
import deck from "./Deck/DeckOfCards";
import backOfCard from "./Deck/BackOfCard";

function App() {
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [userHand, setUserHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerValue, setDealerValue] = useState();
  const [disableButton, setDisableButton] = useState(false);
  const [userStands, setUserStands] = useState(false);

  useEffect(() => {
    setDeckOfCards(deck);
  });

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 0; i < dealerHand.length; i++) {
  //     count += dealerHand[i].value;
  //   }
  //   setDealerValue(count);
  //   console.log(dealerHand.length);
  // }, [dealerHand]);

  function getNewCard() {
    const randomIndexFromDeck = Math.floor(Math.random() * deck.length) + 1;
    deckOfCards.splice(randomIndexFromDeck, 1);
    return deckOfCards[randomIndexFromDeck];
  }

  function dealHandler() {
    setUserStands(false);
    setIsGameActive(true);
    setDisableButton(false);
    setDealerHand([getNewCard(), backOfCard]);
    setUserHand([getNewCard(), getNewCard()]);
  }

  function standHandler() {
    setUserStands(true);
    setDisableButton(true);
    // setDealerHand(dealerHand.splice(1, 1));
    const removedFlippedCard = dealerHand.pop();
    setDealerHand(removedFlippedCard);
    setDealerHand([...dealerHand, getNewCard()]);
  }

  // if (userStands && dealerValue < 17) {
  //   const newDealerCard = getNewCard();
  //   setDealerHand([...dealerHand, newDealerCard]);
  // }

  return (
    <div className="App">
      <div>
        <h2>Black Jack: 21</h2>
        <h3>
          This game of Black Jack consists of 6 decks of cards (Cards remaining
          in the deck: {deckOfCards.length})
        </h3>
      </div>
      <button
        className="w3-button w3-blue w3-round-medium"
        onClick={() => dealHandler()}
      >
        Deal Cards
        <br />
      </button>
      <hr />
      <DealerHand dealerHand={dealerHand} userStands={userStands} />
      <br />
      <UserHand userHand={userHand} />
      {userHand.length > 0 && (
        <div>
          <button
            onClick={() => setUserHand([...userHand, getNewCard()])}
            disabled={disableButton}
            className="hit-button"
            id="hit-button"
          >
            Hit
          </button>
          <button onClick={() => standHandler()} className="stand-button">
            Stand
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

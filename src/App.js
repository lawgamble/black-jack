import React, { useState, useEffect } from "react";
import "./App.css";
import UserHand from "./User/UserHand";
import DealerHand from "./Dealer/DealerHand";
import deck from "./Deck/DeckOfCards";

function App() {
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerValue, setDealerValue] = useState();
  const [userHand, setUserHand] = useState([]);
  const [userValue, setUserValue] = useState();

  useEffect(() => {
    setDeckOfCards(deck);
  });

  function dealUser() {
    enableHitButton();
    let iOfCardOne = Math.floor(Math.random() * deck.length) + 1;
    let iOfCardTwo = Math.floor(Math.random() * deck.length) + 1;
    setUserHand([deck[iOfCardOne], deck[iOfCardTwo]]);
    deckOfCards.splice(iOfCardOne, 1);
    deckOfCards.splice(iOfCardTwo, 1);
    dealDealer();
  }

  function dealDealer() {
    let iOfCardOne = Math.floor(Math.random() * deck.length) + 1;
    let iOfCardTwo = Math.floor(Math.random() * deck.length) + 1;
    setDealerHand([deck[iOfCardOne], deck[iOfCardTwo]]);
    deckOfCards.splice(iOfCardOne, 1);
    deckOfCards.splice(iOfCardTwo, 1);
  }

  function dealerHit() {
    let hitCardIndex = Math.floor(Math.random() * deck.length) + 1;
    setDealerHand([...dealerHand, deckOfCards[hitCardIndex]]);
    deckOfCards.splice(hitCardIndex, 1);
  }

  function hitButton() {
    let hitCardIndex = Math.floor(Math.random() * deck.length) + 1;
    setUserHand([...userHand, deckOfCards[hitCardIndex]]);
    console.log(userHand);
    deckOfCards.splice(hitCardIndex, 1);
  }

  function standButton() {
    disableHitButton();
    if (dealerValue < 17) {
      dealerHit();
    }
  }

  function disableHitButton() {
    document.getElementById("hit-btn").disabled = true;
  }

  function enableHitButton() {
    document.getElementById("hit-btn").disabled = false;
  }

  return (
    <div className="App">
      <div>
        <h2>Black Jack: 21</h2>
        <h3>
          This game of Black Jack consists of 6 decks of cards (Cards remaining
          in the deck: {deckOfCards.length})
        </h3>
      </div>
      <button className="deal-btn" onClick={dealUser}>
        Deal Cards
        <br />
      </button>
      <DealerHand
        dealerHand={dealerHand}
        dealerValue={dealerValue}
        setDealerValue={setDealerValue}
      />
      <hr></hr>
      <UserHand
        userHand={userHand}
        userValue={userValue}
        setUserValue={setUserValue}
      />
      <div style={{ display: userHand.length > 0 ? "block" : "none" }}>
        <button className="hit-button" id="hit-btn" onClick={hitButton}>
          Hit
        </button>
        <button className="stand-btn" onClick={standButton}>
          Stand
        </button>
      </div>
    </div>
  );
}

export default App;

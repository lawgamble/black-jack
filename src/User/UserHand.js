import { useState, useEffect } from "react";
import "./UserHand.css";

function UserHand({ userHand }) {
  const [userValue, setUserValue] = useState();

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < userHand.length; i++) {
      count += userHand[i].value;
    }
    setUserValue(count);
  }, [userHand]);

  return (
    <div>
      {userHand.map((card, index) => (
        <UserCard card={card} index={index} />
      ))}
      <div>{userHand.length > 0 && `User Count: ${userValue}`}</div>
    </div>
  );
}

function UserCard({ card, index, userValue }) {
  return (
    <div className="cards-in-hand w3-animate-right">
      <img
        src={card.image}
        key={index}
        alt={card.code}
        className="card-image w3-animate-right"
      />
    </div>
  );
}
export default UserHand;

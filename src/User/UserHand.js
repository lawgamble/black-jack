import React, { useEffect } from "react";
import "./UserHand.css";

const UserHand = ({ userHand, userValue, setUserValue }) => {
  useEffect(() => {
    let number = 0;
    for (let i = 0; i < userHand.length; i++) {
      number += userHand[i].value;
      setUserValue(number);
    }
  }, [userHand]);

  return (
    <div>
      {userHand.length > 1
        ? userHand.map((card, index) => (
            <div className="user-hand" key={index}>
              <img src={card.image} />
            </div>
          ))
        : null}
      <div>{userValue}</div>
    </div>
  );
};

export default UserHand;

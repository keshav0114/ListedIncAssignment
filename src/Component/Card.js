import React from "react";
import { ReactComponent as User } from "../SvgIcons/User.svg";
import { ReactComponent as Like } from "../SvgIcons/Like.svg";
import { ReactComponent as Revenue } from "../SvgIcons/Revenue.svg";
import { ReactComponent as Transaction } from "../SvgIcons/Transaction.svg";
import "../CSS/card.css";

const Card = () => {
  const cardData = [
    {
      title: "Total Revenues",
      number: "$2,129,430",
      icon: (props) => <Revenue {...props} />,
      color: "#DDEFE0",
    },
    {
      title: "Total Transactions",
      number: "1,520",
      icon: (props) => <Transaction {...props} />,
      color: "#F4ECDD",
    },
    {
      title: "Total Likes",
      number: "9,721",
      icon: (props) => <Like {...props} />,
      color: "#EFDADA",
    },
    {
      title: "Total Revenues",
      number: "892",
      icon: (props) => <User {...props} />,
      color: "#DEE0EF",
    },
  ];
  return (
    <>
      <div className="cardOuterContainer">
        {cardData.map((item, index) => (
          <div
            className="cardContainer"
            style={{ backgroundColor: item.color }}
            key={index}
          >
            <div className="cardInnerContainer">
              <div className="cardTitle">{item.title}</div>
              <div className="cardNumber">{item.number}</div>
            </div>
            <item.icon />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

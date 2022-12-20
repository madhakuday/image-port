import React from "react";
import { useNavigate } from "react-router";

import "./Card.css";
import cardData from "../data/cardData";

const Card = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        {cardData.map((x) => (
          <div className="container-card">
            <div className="card-bottom-title">React js</div>
            <div
              class="card-wrapper"
              onClick={() => {
                navigate(`/card/${x.id}`);
              }}
            >
              <div class="card-top">
                <img class="image" src={x.img} />
              </div>
              {/* <div class="card-bottom">
              <span class="top-text">Premium Membership</span>
              <br />
              <span class="bottom-text">
                Join our membership program to download music for free, listen
                offline and skip songs
              </span>
              <br />
              <button class="button">Join Us</button>
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

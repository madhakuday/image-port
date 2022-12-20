import React, { useState } from "react";
import { useNavigate } from "react-router";

import "./Card.css";
import cardData from "../data/cardData";
import Modal from "./modal/Modal";

const Card = () => {
  const [id, setId] = useState();
  const [open, setOpne] = useState(false);
  const navigate = useNavigate();
  const onClick = () => <Modal id="2" />;
  return (
    <>
      <div className="main-container">
        <Modal open={true} id={id} />
        {cardData.map((x) => (
          <div className="container-card">
            <div className="card-bottom-title">React js</div>
            <div
              class="card-wrapper"
              onClick={() => {
                setId(x.id);
                setTimeout(() => {
                  setOpne(!open);
                }, 5000);
                // navigate(`/card/${x.id}`);
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

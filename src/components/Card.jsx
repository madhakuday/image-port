import React from "react";
import img1 from "../Assetes/New folder/img-1.png";
import img2 from "../Assetes/New folder/img-2.png";
import img3 from "../Assetes/New folder/img-3.png";
import img4 from "../Assetes/New folder/img-4.png";
import img5 from "../Assetes/New folder/img-5.png";
import img6 from "../Assetes/New folder/img-6.png";
import img7 from "../Assetes/New folder/img-7.png";
import img8 from "../Assetes/New folder/img-8.png";

import "./Card.css";

const cardData = [img1, img2, img3, img4, img5, img6, img7, img8];

const Card = () => {
  return (
    <div className="main-container">
      {cardData.map((x) => (
        <div class="card-wrapper">
          <div class="card-top">
            <img class="image" src={x} />
          </div>
          <div class="card-bottom">
            <span class="top-text">Premium Membership</span>
            <br />
            <span class="bottom-text">
              Join our membership program to download music for free, listen
              offline and skip songs
            </span>
            <br />
            <button class="button">Join Us</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

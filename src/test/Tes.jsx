import React from "react";
import "./Tes.css";
import cardData from "../data/cardData";
const Tes = () => {
  /** */
  return (
    <div>
      <main>
        <div className="cards">
          {cardData.map((x) => (
            <a className="stack" href="#">
              <div
                style={{ backgroundImage: `url(${x.img})` }}
                className="card top"
              >
                {/* <div className="contents">
                  <h2>
                    <strong> </strong>
                  </h2>
                  <h3>Ann Thrax</h3>
                  Project Manager
                  <br />
                  <br />
                  <span>✉️</span>annthrax@example.com
                  <br />
                  <span>📞</span>808-293-4613
                  <br />
                  <br />
                  3801 Stratford Drive
                  <br />
                  Laie, HI 96762
                </div> */}
              </div>
              {/* <div className="card mid-top">
                <div className="contents">
                  <div className="city">Laie, HI 96762</div>
                </div>
              </div>
              <div className="card mid-bottom">
                <div className="contents">
                  <div className="city">Laie, HI 96762</div>
                </div>
              </div>
              <div className="card bottom">
                <div className="contents">
                  <div className="city">Laie, HI 96762</div>
                </div>
              </div> */}
              <div className="card shadow"></div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tes;

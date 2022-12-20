import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import cardData from "../data/cardData";

const SingalCard = () => {
  const { id } = useParams();
  const naviGate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    let MainData = cardData.filter((x) => x.id == id);
    setData(MainData);
  }, []);
  return (
    <div>
      <span
        style={{
          background: "#FFF35B",
          borderRadius: "50%",
          padding: "5px",
          textAlign: "center",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => naviGate("/")}
      >
        &larr;
      </span>
      {data.map((x) => (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <img src={x.fImg} alt="" width="50%" />
          </div>
        </>
      ))}
    </div>
  );
};

export default SingalCard;

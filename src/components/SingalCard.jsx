import React, { useEffect, useState } from "react";
import img1 from "../Assetes/New folder/img-1.png";
import img2 from "../Assetes/New folder/img-2.png";
import img3 from "../Assetes/New folder/img-3.png";
import img4 from "../Assetes/New folder/img-4.png";
import img5 from "../Assetes/New folder/img-5.png";
import img6 from "../Assetes/New folder/img-6.png";
import img7 from "../Assetes/New folder/img-7.png";
import img8 from "../Assetes/New folder/img-8.png";
import { useLocation, useNavigate, useParams } from "react-router";
import "./Card.css";

const cardData = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
];

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
              height: "100vh",
              justifyContent: "center",
            }}
          >
            <img src={x.img} alt="" width="50%" />
          </div>
        </>
      ))}
    </div>
  );
};

export default SingalCard;

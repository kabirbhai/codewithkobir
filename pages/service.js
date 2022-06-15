import React from "react";
import img from "./banner.png";
import Image from "next/image";

const Service = ({ service }) => {
  const { title, id, desc } = service;

  return (
    <div>
      <div className="card shadow-md hover:shadow-2xl border-none">
        <Image src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

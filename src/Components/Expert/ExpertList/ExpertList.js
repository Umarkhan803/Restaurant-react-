import React from "react";

function ExpertList({ data }) {
  return (
    <>
      <div className="chef-card">
        <img
          className="img image1"
          alt="chef 1"
          src={`images/${data.chefImg}`}
        />
        <div className="card-info">
          <h4>{data.chefName}</h4>
          <p>{data.chefInfo}</p>
        </div>
        <span className="chef-name">{data.chefName}</span>
      </div>
    </>
  );
}

export default ExpertList;

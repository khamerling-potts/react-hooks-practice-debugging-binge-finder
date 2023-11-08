import React from "react";

function TVShow(props) {
  return (
    <div>
      <br />
      <img
        src={props.show.image.medium}
        onClick={(e) => props.selectShow(props.show)}
        alt=""
      />
    </div>
  );
}

export default TVShow;

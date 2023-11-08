import React from "react";

function Episode(props) {
  let { eachEpisode } = props;

  console.log(eachEpisode);

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
}

export default Episode;

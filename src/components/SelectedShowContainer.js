import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (!!props.allEpisodes) {
      let seasons = unique(props.allEpisodes.map((e) => e.season));
      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  }

  function mapEpisodes() {
    return props.allEpisodes.map((e) => {
      if (e.season === selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
      return null;
    });
  }

  function handleSelectionChange(e) {
    setSelectedSeason(parseInt(e.target.value));
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select
        style={{ display: "block" }}
        onChange={handleSelectionChange}
        value={selectedSeason}
      >
        {mapSeasons()}
      </select>
      {mapEpisodes()}
    </div>
  );
}

export default SelectedShowContainer;

function unique(arg) {
  const arr = [];
  for (let i = 0; i < arg.length; i++) {
    if (!arr.includes(arg[i])) {
      arr.push(arg[i]);
    }
  }
  return arr;
}

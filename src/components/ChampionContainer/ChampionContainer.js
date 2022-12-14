import React from "react";
import ChampionCard from "../ChampionCard/ChampionCard";
import './ChampionContainer.css'
import PropTypes from 'prop-types'
const ChampionsLoad = ({ characters, displayForm }) => {
    console.log({
        characters
    });
    const featureChampions = characters?.map((character, index,) => {
        return (
            <ChampionCard
                champion={character}
                index={index}
                key={`${character.id}-${index}`}
                displayForm={displayForm}
            />

        )
    }) ?? [];
    return <div className="champion-container"><h2 className="feature-champions-key">{featureChampions}</h2></div>;
}
export default ChampionsLoad
ChampionsLoad.propTypes = {
    character: PropTypes.array,
    displayForm: PropTypes.func
}

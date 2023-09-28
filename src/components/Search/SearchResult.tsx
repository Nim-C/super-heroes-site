import { Hero } from "@/types";
import ProgressBar from "./ProgressBar";

import AddToComparisonButton from "@/components/AddToComparisonButton";
import HeroesComparisonContext from "@/contexts/heroes-comparison";

import "@/assets/styles/SearchResult.css";
import { useCallback, useContext } from "react";

function SearchResult(hero: Hero) {
  const { heroes, setHeroes } = useContext(HeroesComparisonContext);
  const handleClickAddHero = useCallback(() => {
    setHeroes([...heroes, hero]);
  }, [hero, heroes, setHeroes]);

  return (
    <div className="result-element">
      <img className="image" src={hero.image.url} alt={hero.name} />
      <h3 className="name">{hero.name}</h3>
      <p className="occupation">Occupation: {hero.work.occupation}</p>
      <ProgressBar
        className="strength-progress"
        barName="Strength"
        percents={hero.powerstats.strength}
      />
      {heroes.length < 6 && (
        <AddToComparisonButton onClick={handleClickAddHero} />
      )}
    </div>
  );
}

export default SearchResult;
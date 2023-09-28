import { Hero } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";

type HeroesSearchResultsContextType = {
  heroes: Hero[];
  setHeroes: Dispatch<SetStateAction<Hero[]>>;
};

const HeroesSearchResultsContext =
  createContext<HeroesSearchResultsContextType>({
    heroes: [],
    setHeroes: () => {},
  });

export default HeroesSearchResultsContext;

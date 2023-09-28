import { Hero } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";

type HeroesSearchResultsContextType = {
  hero: Hero | null;
  setHero: Dispatch<SetStateAction<Hero | null>>;
};

const HeroModalContext = createContext<HeroesSearchResultsContextType>({
  hero: null,
  setHero: () => {},
});

export default HeroModalContext;

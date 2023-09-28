import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import { Hero } from "@/types";

import HeroesComparisonContext from "@/contexts/heroes-comparison";
import HeroModalContext from "@/contexts/heroes-modal";

import Header from "@/layout/Header";
import ComparisonTable from "@/components/Table/ComparisonTable";
import HeroModal from "@/layout/HeroModal";

import "@/assets/styles/App.css";

const queryClient = new QueryClient();

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [heroForModal, setHeroForModal] = useState<Hero | null>(null);

  return (
    <HeroModalContext.Provider
      value={{ hero: heroForModal, setHero: setHeroForModal }}
    >
      <HeroesComparisonContext.Provider value={{ heroes, setHeroes }}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>
            <ComparisonTable />
            <HeroModal />
          </main>
        </QueryClientProvider>
      </HeroesComparisonContext.Provider>
    </HeroModalContext.Provider>
  );
}

export default App;

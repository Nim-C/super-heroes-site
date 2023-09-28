import SearchResult from "@/components/SearchResult";
import { Hero } from "@/types";
import "@/assets/styles/SearchResults.css";

type SearchResultsProps = {
  heroes: Hero[];
};

function SearchResults({ heroes }: SearchResultsProps) {
  const hasHeroes = heroes?.length > 0;

  return (
    <div
      className={["results-container", hasHeroes ? "with-results" : ""].join(
        " "
      )}
    >
      {hasHeroes &&
        heroes.map((hero) => <SearchResult key={hero.id} {...hero} />)}
    </div>
  );
}

export default SearchResults;

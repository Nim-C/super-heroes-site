import { search } from "@/utils/api";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import SearchResults from "@/components/Search/SearchResults";

import "@/assets/styles/SearchElement.css";

function SearchElement() {
  const [name, setName] = useState<string>("");
  const { data: heroes, status } = useQuery({
    queryKey: ["name", name],
    queryFn: () => (name ? search(name) : []),
  });

  const handleInputValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  return (
    <div className="search-element">
      <input
        value={name}
        type="search"
        onChange={handleInputValueChange}
        name="super-hero-name"
        placeholder="Type in superhero name"
      />
      <SearchResults heroes={status === "success" && heroes ? heroes : []} />
    </div>
  );
}

export default SearchElement;

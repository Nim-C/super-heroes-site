import "@/assets/styles/HeroModal.css";
import { useCallback, useContext } from "react";
import HeroModalContext from "@/contexts/heroes-modal";

function HeroModal() {
  const { hero, setHero } = useContext(HeroModalContext);
  const closeModal = useCallback(() => {
    setHero(null);
  }, [setHero]);

  if (!hero) return null;

  return (
    <div className="backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={closeModal}>
          ╳
        </button>
        <h1>{hero.name} Deep Dive</h1>
        <img src={hero.image.url} />
        <section className="details">
          <section>
            <h2>Appearance</h2>
            <ul>
              <li>Height: {hero.appearance.height[0]}</li>
              <li>Weight: {hero.appearance.weight[0]}</li>
              <li>Gender: {hero.appearance.gender}</li>
              <li>Eye Color: {hero.appearance["eye-color"]}</li>
              <li>Hair Color: {hero.appearance["hair-color"]}</li>
            </ul>
          </section>
          <section>
            <h2>Biography</h2>
            <ul>
              <li>Full Name: {hero.biography["full-name"]}</li>
              <li>Place of birth: {hero.biography["place-of-birth"]}</li>
              <li>Aliases: {hero.biography.aliases.join(", ")}</li>
            </ul>
          </section>
          <section>
            <h2>Power stats</h2>
            <ul>
              <li>Power: {hero.powerstats.power}</li>
              <li>Strength: {hero.powerstats.strength}</li>
              <li>Speed: {hero.powerstats.speed}</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}

export default HeroModal;

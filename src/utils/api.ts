import { Hero } from "@/types";

const API_URL = `/api/${import.meta.env.VITE_API_KEY}/search`;

export async function search(name: string): Promise<Hero[] | null> {
  let returnValue: Hero[] | null;
  try {
    const response = await fetch(`${API_URL}/${name}`);
    const heroData: { response: string; results: Hero[] } =
      await response.json();
    returnValue = heroData.results;
  } catch (error) {
    returnValue = null;
  }
  return returnValue;
}

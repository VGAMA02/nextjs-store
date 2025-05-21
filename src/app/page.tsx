import { Description } from "app/Components/home/Description";
import { Hero } from "app/Components/home/Hero";
import { MainProducts } from "app/Components/home/MainProducts";
export default function Home() {
  return (
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
  );
}

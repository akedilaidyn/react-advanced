import CssModulesProductCard from "./CssModulesProductCard";
import StyledProductCard from "./StyledProductCard";
import TailwindProductCard from "./TailwindProductCard";

export function Task5() {
  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">
        Task 5: CSS Modules, Tailwind, Styled Components
      </h1>
      <div className="max-w-7xl flex gap-4 justify-center flex-wrap">
        <TailwindProductCard />
        <StyledProductCard />
        <CssModulesProductCard />
      </div>
    </article>
  );
}

import { useState } from "react";
import { Button } from "../shared";

export default function Task4() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("An intentional error has occurred!");
  }

  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">Task 4: Error Boundaries</h1>
      <div className="max-w-lg mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit
          fugiat voluptate ipsum hic beatae eveniet fuga voluptas molestias
          aliquam voluptatum reprehenderit ducimus illum, magni expedita facilis
          eligendi, libero obcaecati.
        </p>
        <Button onClick={() => setShouldCrash(true)}>Generate Error</Button>
      </div>
    </article>
  );
}

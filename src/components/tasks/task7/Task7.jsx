import FeedbackManager from "./FeedbackManager";
import withLoading from "../task10/withLoading";
import { useEffect, useState } from "react";

const FeedbackManagerWithLoading = withLoading(FeedbackManager);

export function Task7() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">Task 7: useReducer & Custom Hook</h1>
      <FeedbackManagerWithLoading isLoading={isLoading} />
    </article>
  );
}

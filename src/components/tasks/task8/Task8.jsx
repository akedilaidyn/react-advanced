import MentorDashboard from "./MentorDashboard";
import withLoading from "../task10/withLoading";
import { useEffect, useState } from "react";

const MentorDashboardWithLoading = withLoading(MentorDashboard);

export function Task8() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">
        Task 8: Memoization & Optimization
      </h1>
      <MentorDashboardWithLoading isLoading={isLoading} />
    </article>
  );
}

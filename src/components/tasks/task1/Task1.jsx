import ControlledForm from "./UncontrolledForm";
import UncontrolledForm from "./ControlledForm";

export function Task1() {
  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">
        Task 1: Controlled and Uncontrolled Forms
      </h1>
      <ControlledForm />
      <UncontrolledForm />
    </article>
  );
}

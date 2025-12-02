// РЕВЬЮ: Здесь перепутаны импорты — компоненты названы наоборот.
// Как должно быть: ControlledForm из './ControlledForm', UncontrolledForm из './UncontrolledForm'.
// Почему это важно: нарушает читаемость и может запутать при ревью/поддержке.
// Как исправить: просто поменять пути местами, логика ниже уже использует правильные имена.
import ControlledForm from "./UncontrolledForm";
import UncontrolledForm from "./ControlledForm";

export function Task1() {
  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">
        Task 1: Controlled and Uncontrolled Forms
      </h1>
      {/* РЕВЬЮ: Несмотря на путаницу в импортax выше, здесь вызов соответствует ожиданиям — сперва контролируемая форма, затем неконтролируемая. */}
      <ControlledForm />
      <UncontrolledForm />
    </article>
  );
}

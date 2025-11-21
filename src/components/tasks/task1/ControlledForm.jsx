import { useState } from "react";
import { Button, Input, Field } from "../../shared";

export default function ControlledForm() {
  const [questions, setQuestions] = useState("");
  const questionsError =
    questions.length < 4 ? "Questions must be at least 4 characters long" : "";

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(questions);
    setQuestions("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto gap-4 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h1 className="text-lg font-semibold">
        Mentee Feedback Form (controlled form)
      </h1>

      <Field>
        <label htmlFor="questions">Do you have any questions?</label>
        <Input
          type="text"
          name="questions"
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        />
        <p className="text-red-500">{questionsError}</p>
      </Field>
      <Button onClick={handleSubmit} disabled={questionsError !== ""}>
        Submit
      </Button>
    </form>
  );
}

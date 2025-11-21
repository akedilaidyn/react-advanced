import { useRef } from "react";
import { Button, Input, Field } from "../../shared";

export default function UncontrolledForm() {
  const questionsRef = useRef("");
  const commentaryRef = useRef("");
  const impressionRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !questionsRef.current.value ||
      !commentaryRef.current.value ||
      !impressionRef.current.value
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    const formData = {
      questions: questionsRef.current.value,
      commentary: commentaryRef.current.value,
      impression: impressionRef.current.value,
    };
    alert(JSON.stringify(formData, null, 2));
    event.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto gap-4 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <h1 className="text-lg font-semibold">
        Mentor Feedback Form (uncontrolled form)
      </h1>

      <Field>
        <label htmlFor="questions">Do you have any questions?</label>
        <Input type="text" name="questions" id="questions" ref={questionsRef} />
      </Field>

      <Field>
        <label htmlFor="commentary">Do you anything to add?</label>
        <Input
          type="text"
          name="commentary"
          id="commentary"
          ref={commentaryRef}
        />
      </Field>

      <Field>
        <label htmlFor="impression">Your impressions</label>
        <Input
          type="text"
          name="impression"
          id="impression"
          ref={impressionRef}
        />
      </Field>
      <Button type="submit">Submit</Button>
    </form>
  );
}

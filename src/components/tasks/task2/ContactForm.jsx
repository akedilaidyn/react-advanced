import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Field, Input } from "../../shared";
import Notification from "./Notification";

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailRef.current.value === "" || messageRef.current.value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setShowNotification(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto gap-4 p-4 border border-gray-300 rounded-lg shadow-md"
    >
      <Field>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" ref={emailRef} />
      </Field>
      <Field>
        <label htmlFor="message">Message</label>
        <Input type="text" name="message" id="message" ref={messageRef} />
      </Field>
      <Button onClick={() => setShowNotification(true)}>Submit</Button>
      {showNotification &&
        createPortal(
          <Notification
            onClose={() => setShowNotification(false)}
            isValid={isValid}
          />,
          document.body
        )}
    </form>
  );
}

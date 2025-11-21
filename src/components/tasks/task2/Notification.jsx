import { useEffect } from "react";
import { Button } from "../../shared";

export default function Notification({ isValid, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow-lg ${
        isValid ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p>
        {isValid
          ? "Form submitted successfully!"
          : "Please fill in all the fields."}
      </p>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

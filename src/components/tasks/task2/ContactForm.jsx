// РЕВЬЮ: Здесь форма реализована как неконтролируемая через useRef — это ок для простых форм.
// Обратите внимание: ваш общий компонент Input сейчас не пробрасывает ref (нужен forwardRef),
// поэтому ссылки emailRef/messageRef могут не работать как ожидается. См. комментарий в shared/Input.jsx.
// Также: у кнопки ниже нет явного type, внутри <form> она будет type="submit" по умолчанию,
// при этом вы ещё и вызываете setShowNotification(true) в onClick — возможна двойная отправка/двойной показ.
// Рекомендации:
// - использовать onSubmit формы, а кнопке проставить type="submit" и убрать onClick;
// - если оставлять onClick, то кнопке type="button";
// - рассмотреть переход на контролируемые поля для более тонкой валидации.
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Field, Input } from "../../shared";
import Notification from "./Notification";

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const [isValid, setIsValid] = useState(true);
  // РЕВЬЮ: начальные значения в useRef не используются для <input>, значение берётся из DOM.
  // Можно просто useRef(null) для наглядности.
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
      {/* РЕВЬЮ: Возможен двойной показ уведомления (и от onSubmit, и от onClick). См. рекомендации выше. */}
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

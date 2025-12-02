// РЕВЬЮ: Внимание на динамические классы Tailwind: строки вида `bg-${color}-500`/`hover:bg-${color}-600`
// не будут собраны purge/JIT, если заранее не известны. Это частая причина отсутствия стилей в проде.
// Рекомендации: (1) использовать фиксированный набор вариантов через маппинг, (2) safelist в tailwind
// конфиге, либо (3) cva/clsx-решения. Также внутри <form> без явного type, кнопка по умолчанию type="submit"
// и может вызывать двойную отправку вместе с обработчиком onClick. Лучше явно указывать type.
export function Button({ children, color = "blue", ...props }) {
  return (
    <button
      className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600 cursor-pointer disabled:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
}

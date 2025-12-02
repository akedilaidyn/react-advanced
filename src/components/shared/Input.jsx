// РЕВЬЮ: Этот компонент не поддерживает ref, хотя в проектах выше (напр., Task1 UncontrolledForm)
// он используется как неконтролируемый с ref. В функциональных компонентах ref не пробрасывается
// автоматически — нужно использовать React.forwardRef. Иначе refs будут указывать на null,
// и чтение значения через ref.current не сработает.
// Рекомендация: обернуть компонент в forwardRef и передавать ref на <input />.
export function Input({ ...props }) {
  return (
    <input
      className="bg-gray-100 px-1.5 py-0.5 border border-gray-300 rounded"
      {...props}
    />
  );
}

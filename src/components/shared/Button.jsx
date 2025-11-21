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

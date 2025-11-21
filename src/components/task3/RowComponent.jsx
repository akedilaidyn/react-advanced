export default function RowComponent({ index, style, items }) {
  return (
    <div style={style} className="px-4 border-b border-gray-200">
      {items[index]}
    </div>
  );
}

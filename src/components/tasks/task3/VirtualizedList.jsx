// РЕВЬЮ: В библиотеке react-window обычно используется компонент FixedSizeList/VariableSizeList,
// а не абстрактный List. Его API: itemCount, itemSize, width/height и рендер-функция children.
// Текущие пропсы rowComponent/rowCount/rowHeight/rowProps — это не валидный API для react-window.
// Рекомендация: заменить на <FixedSizeList itemCount={items.length} itemSize={25} height={...} width={...}>
// {(props) => <RowComponent {...props} data={items} />} и внутри RowComponent читать props.data.
import { List } from "react-window";
import { items } from "./utils/generateNumbers";
import RowComponent from "./RowComponent";

export default function VirtualizedList() {
  return (
    <article className="max-w-lg mx-auto">
      <div className="h-48">
        {/* РЕВЬЮ: См. комментарий выше — этот вызов сейчас не соответствует API react-window. */}
        <List
          rowComponent={RowComponent}
          rowCount={items.length}
          rowHeight={25}
          rowProps={{ items }}
        />
      </div>
    </article>
  );
}

import { List } from "react-window";
import { items } from "./utils/generateNumbers";
import RowComponent from "./RowComponent";

export default function VirtualizedList() {
  return (
    <article className="max-w-lg mx-auto">
      <div className="h-48">
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

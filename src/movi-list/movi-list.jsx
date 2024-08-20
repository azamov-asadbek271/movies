import MoviListItem from "../movi-list-item/movi-list-item"
import "./movi-list.css"

function MoviList({ data, onDelete, onToggleProp }) {
  return (
    <ul className="movi-list">
      {data.map((item) => {
        return (
          <MoviListItem
            {...item}
            key={item.id}
            onDelet={() => onDelete(item.id)}
            onToggleProp={(e) => onToggleProp(item.id,
              e.currentTarget.getAttribute("data-toggle"))}
          />
        );
      })}
    </ul>
  );
}

export default MoviList
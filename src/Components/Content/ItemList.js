import Item from "./Item";
import styles from "./Itemlist.module.css";

const list = [
  { id: 1, name: "Electromagnetism Notes", date: "Mar 1" },
  { id: 2, name: "Electromagnetism Notes", date: "Mar 1" },
  { id: 3, name: "Electromagnetism Notes", date: "Mar 1" },
  { id: 4, name: "Electromagnetism Notes", date: "Mar 1" },
  { id: 5, name: "Electromagnetism Notes", date: "Mar 1" },
];
const ItemList = (props) => {
  console.log(list);
  return (
    <div className={styles.itemlist}>
      <button className={styles.create_btn} onClick={props.onShowCreate}>
        +Create
      </button>
      {list.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} date={item.date} />
      ))}
    </div>
  );
};
export default ItemList;

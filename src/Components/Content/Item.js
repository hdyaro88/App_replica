import styles from "../Content/Item.module.css";
import Card from "../UI/Card/Card";
import list_item from "../../images/list-item.png";
import pdf from "../../images/pdf.png";
import { useState } from "react";
import Menu from "../menu";
const Item = (props) => {
  const [isClicked, setisClicked] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const clickHandler = () => {
    setisClicked(!isClicked);
  };
  console.log("hello2");
  const showDropDownHandler = () => {
    setShowDropDown(!showDropDown);
    setisClicked(false);
  };
  const dropDown = (
    <div className={styles.dropDown}>
      <label>Edit</label>
      <label>Delete</label>
      <label>Copy Link</label>
    </div>
  );
  return (
    <div onClick={clickHandler} className={styles.card}>
      <Card>
        <div className={styles.flex_container}>
          <div className={styles.item_list_left}>
            <img src={list_item} />
            <label>{props.name}</label>
          </div>
          <div className={styles.item_list_right}>
            <label>Posted {props.date}</label>
            {showDropDown && dropDown}
            <Menu onClick={showDropDownHandler} />
          </div>
        </div>
        {isClicked && !showDropDown && (
          <div className={styles.extra_div} style={{ marginTop: "10px" }}>
            <img src={pdf} />
            <hr />
            <a>View Notes</a>
          </div>
        )}
      </Card>
    </div>
  );
};
export default Item;

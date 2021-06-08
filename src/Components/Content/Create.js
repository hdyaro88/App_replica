import Card from "../UI/Card/Card";
import styles from "./Create.module.css";
import add_btn from "../../images/add_btn.png";
import stdnt_btn from "../../images/all student.png";
const Create = () => {
  return (
    <div className={styles.create}>
      <Card>
        <form>
          <label>title</label>
          <input
            placeholder="Title"
            className={styles.title_input}
            type="text"
          ></input>
          <label>description</label>
          <input
            placeholder="Description"
            className={styles.desc_input}
            id="desc"
            type="text"
          ></input>
          <footer>
            <button>
              <img src={add_btn} />
            </button>
            <button>
              <img src={stdnt_btn} />
            </button>
            <button style={{ float: "right" }}>Cancel</button>
          </footer>
        </form>
      </Card>
    </div>
  );
};
export default Create;

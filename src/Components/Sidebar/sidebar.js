import studymtr from "../../images/Group.png";
import tab_img_2 from "../../images/edit.png";
import tab_img_3 from "../../images/homework.png";
import tab_img_4 from "../../images/discussion.png";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.classwork}>
        <h2 style={{ color: "white", marginLeft: "20px", fontSize: "small" }}>
          Classwork
        </h2>
        <hr />
        <div className={styles.sm_list}>
          <div style={{ background: "white" }}>
            <div className={styles.sidebar_tabs_data}>
              <img src={studymtr} width="20px" height="20px" />
              <label>Study Material</label>
            </div>
          </div>
          <div style={{ color: "white" }}>
            <div className={styles.sidebar_tabs_data}>
              <img src={tab_img_2} width="20px" height="20px" />
              <label>Assignment</label>
            </div>
          </div>
          <div style={{ color: "white" }}>
            <div className={styles.sidebar_tabs_data}>
              <img src={tab_img_3} width="20px" height="20px" />
              <label>Quiz</label>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.classwork} ${styles.people}`}>
        <h2 style={{ color: "white", marginLeft: "20px", fontSize: "small" }}>
          People
        </h2>
        <hr />
        <div className={styles.sm_list}>
          <div style={{ color: "white" }}>
            <div className={styles.sidebar_tabs_data}>
              <img src={tab_img_4} width="20px" height="20px" />
              <label>Student</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tab_btn}>
        <button>&lt; &nbsp; Back to classes</button>
        <button>&lt; &nbsp; Back to classes</button>
      </div>
    </div>
  );
};
export default Sidebar;

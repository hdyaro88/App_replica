import profile from "../../images/Rectangle 36.png";
import bell from "../../images/bell 2.png";
import downarrow from "../../images/down-arrow.png";
import rightarrow from "../../images/right-arrow.png";
import styles from "./Header.module.css";
import React from "react";
const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.sideTag}>
        <div className={styles.sideTag_inside}>
          <h1>KenDel</h1>
          <img className={styles.rightarrow} src={rightarrow} />
        </div>
      </div>
      <div className={styles.header}>
        <h1 style={{ marginLeft: "10px" }} className={styles.classroomTag}>
          Classroom
        </h1>
        <ul>
          <li>
            <img src={bell} />
          </li>
          <li>
            <img src={profile} />
          </li>
          <li className={styles.pf_info}>
            <h1>Anjali Doda</h1>
            <h3>Teacher</h3>
          </li>
          <li>
            <img src={downarrow} />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Header;

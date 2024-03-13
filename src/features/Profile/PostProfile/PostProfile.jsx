import React, { useEffect, useState } from "react";
import styles from "./PostProfile.module.scss";
import ModalWindow from "../../../shared/Modalwindow/Modalwindow";

const PostProfile = () => {
  // states
  const [visible, setVisible] = useState(false);

  // states
  const [isCheckedMale, setIsCheckedMale] = useState(false);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  // functions

  const handleCheckboxChange = (gender) => {
    if (gender === "M") {
      setIsCheckedMale(!isCheckedMale);
      setIsCheckedFemale(false);
    } else if (gender === "F") {
      setIsCheckedFemale(!isCheckedFemale);
      setIsCheckedMale(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <div>
      <ModalWindow
        title={"Profile setting"}
        visible={visible}
        setVisible={setVisible}
      >
        <div className={styles.questionnaire}>
          <div className={styles.questionnaire_box}>
            <p className={styles.questionnaire_title}>Your experience:</p>
            <input type="number" min={1} max={10}/>
          </div>
          <div className={styles.questionnaire_box}>
            <p className={styles.questionnaire_title}>Who are you ?</p>
            <div className={styles.gender_container}>
              <label>
                <input
                  type="checkbox"
                  checked={isCheckedMale}
                  onChange={() => handleCheckboxChange("M")}
                />
                QA 
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isCheckedFemale}
                  onChange={() => handleCheckboxChange("F")}
                />
                DevOps
              </label>
            </div>
          </div>
          <div className={styles.questionnaire_box}>
            <p className={styles.questionnaire_title}>Your skills:</p>
            <input type="text" />
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export default PostProfile;

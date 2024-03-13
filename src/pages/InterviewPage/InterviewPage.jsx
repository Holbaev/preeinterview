import React, { useState } from "react";
import styles from "./InterviewPage.module.scss";
import Layout from "../../widgets/Layout/Layout";
import Button from "../../shared/Button/Button";
import ModalWindow from "../../shared/Modalwindow/Modalwindow";
import { AnimatePresence } from "framer-motion";
import Input from "../../shared/Input/Input";
import PostProfile from "../../features/Profile/PostProfile/PostProfile";

const InterviewPage = () => {
  // states
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  // functions

  return (
    <Layout>
      <div className={styles.wrapper}>
        <PostProfile/>
      </div>
    </Layout>
  );
};

export default InterviewPage;

import styles from "./page.module.css";
import { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import SettingModel from "../SettingModel";
import {motion, AnimatePresence } from "framer-motion";

export default function Setting() {
  const [isOpenModel, SetIsOpenModel] = useState(false);

  return (
    <div className={styles.settingWrapper}>
      <motion.button
        className={styles.settingButton}
        onClick={() => SetIsOpenModel(true)}
      >
        <IoIosSettings className={styles.settingIcon} />
        <span>Setting</span>
      </motion.button>
      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {isOpenModel && <SettingModel SetIsOpenModel={SetIsOpenModel} />}
      </AnimatePresence>
    </div>
  );
}

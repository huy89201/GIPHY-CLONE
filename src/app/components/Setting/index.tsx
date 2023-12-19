import styles from "./page.module.css";
import { useEffect, useState, useMemo } from "react";
import { IoIosSettings } from "react-icons/io";
import SettingModel from "../SettingModel";
import { motion, AnimatePresence } from "framer-motion";
import { useGloContext } from "@/app/context/gloContext";

export default function Setting() {
  const [isOpenModel, SetIsOpenModel] = useState(false);
  const { apiKey } = useGloContext();

  const isShow = useMemo(() => {
    return isOpenModel || apiKey.length === 0;
  }, [apiKey, isOpenModel]);

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
        {isShow && <SettingModel SetIsOpenModel={SetIsOpenModel} />}
      </AnimatePresence>
    </div>
  );
}

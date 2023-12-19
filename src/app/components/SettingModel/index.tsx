import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useRef, Dispatch, SetStateAction } from "react";
import { useGloContext } from "@/app/context/gloContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VARIANTS } from "@/app/util/animate";

type TSettingModelProps = {
  SetIsOpenModel: Dispatch<SetStateAction<boolean>>;
};

const schema = yup
  .object({
    apiKey: yup.string().required("API key is a required field"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function SettingModel({ SetIsOpenModel }: TSettingModelProps) {
  const { setApiKey, apiKey: API_KEY } = useGloContext();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      apiKey: API_KEY,
    },
  });

  const onSubmit = (data: FormData) => {
    setApiKey(data.apiKey);
    SetIsOpenModel(false);
    localStorage.setItem("API_KEY", JSON.stringify(data.apiKey));
  };

  const modelRef = useRef<HTMLFormElement>(null);

  const handleOutsideClick = (e: any) => {
    if (modelRef.current && !modelRef.current.contains(e.target)) {
      SetIsOpenModel(false);
    }
  };

  return (
    <motion.div
      className={styles.modelWrapper}
      onClick={handleOutsideClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={VARIANTS.DROP_IN}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form
          className={styles.modelForm}
          onSubmit={handleSubmit(onSubmit)}
          ref={modelRef}
        >
          {!API_KEY && (
            <>
              <div className={styles.modelLabel}>
                Sample key: rJLTbsZaG1XIpkj8Qk1KcQTUV7oSQ1aU
              </div>
              <br />
            </>
          )}
          <div className={styles.modelFields}>
            <label htmlFor="apiKey" className={styles.modelLabel}>
              API Key
            </label>
            <input
              type="text"
              {...register("apiKey")}
              className={styles.modelInput}
            />
          </div>
          <p className={styles.modelErrors}>{errors.apiKey?.message}</p>
          <button className={styles.modelSaveBtn} type="submit">
            Save
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

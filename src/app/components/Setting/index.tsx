import { useState, use, useRef, Dispatch, SetStateAction } from "react";
import styles from "./page.module.css";
import { IoIosSettings } from "react-icons/io";

import { useGloContext } from "@/app/context/gloContext";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type TSettingModelProps = {
  SetIsOpenModel: Dispatch<SetStateAction<boolean>>;
};

const schema = yup
  .object({
    apiKey: yup.string().required("API key is a required field"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function SettingModel({ SetIsOpenModel }: TSettingModelProps) {
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
    <div className={styles.modelWrapper} onClick={handleOutsideClick}>
      <form
        className={styles.modelForm}
        onSubmit={handleSubmit(onSubmit)}
        ref={modelRef}
      >
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
    </div>
  );
}

export default function Setting() {
  const [isOpenModel, SetIsOpenModel] = useState(false);

  return (
    <div className={styles.settingWrapper}>
      <button
        className={styles.settingButton}
        onClick={() => SetIsOpenModel(true)}
      >
        <IoIosSettings className={styles.settingIcon} />
        <span>Setting</span>
      </button>
      {isOpenModel && <SettingModel SetIsOpenModel={SetIsOpenModel} />}
    </div>
  );
}

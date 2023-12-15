import styles from "./page.module.css";
import { Gif } from "@giphy/react-components";
import Image from "next/image";
import { IGif } from "@giphy/js-types";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import moment from "moment";
import Rating from "../Raiting";
import { useEffect, useState } from "react";

type TGifModelProps = {
  setModalGif: any;
  modalGif: IGif | any;
};

export default function GifModel({ setModalGif, modalGif }: TGifModelProps) {
  const [views, setViews] = useState<number>();

  useEffect(() => {
    const getViewsCount = async () => {
      const res = await fetch(
        `https://giphy.com/api/v1/proxy-gif/${modalGif.id}/view-count/`
      ).then((res) => res.json());

      setViews(res.viewCount);
    };

    getViewsCount();
  }, [modalGif.id]);

  return (
    <div
      className={styles.modelWrapper}
      onClick={(e) => {
        e.preventDefault();
        setModalGif(undefined);
      }}
    >
      <div className={styles.modelContainer}>
        <Gif
          gif={modalGif}
          width={350}
          height={350}
          style={{ height: "100%", flexShrink: 0 }}
        />
        <div className={styles.modelRightContent}>
          <div>
            {modalGif?.user?.banner_url && (
              <>
                <Image
                  loader={() => modalGif?.user?.banner_url}
                  src={modalGif?.user?.banner_url || ""}
                  alt=""
                  width={0}
                  height={50}
                  style={{ width: "100%" }}
                />
                <br />
              </>
            )}
            <div className={styles.headers}>
              {modalGif?.user && (
                <div className={styles.user}>
                  <Image
                    loader={() => modalGif?.user?.avatar_url}
                    src={modalGif?.user?.avatar_url || ""}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Link target="blank" href={modalGif?.user?.profile_url || ""}>
                    <div className={styles.userDisplayName}>
                      {modalGif?.user?.display_name}
                    </div>
                    <div className={styles.userUserName}>
                      @{modalGif?.user?.username}
                      {modalGif?.user?.is_verified && (
                        <MdVerified className={styles.userVerifyIcon} />
                      )}
                    </div>
                  </Link>
                </div>
              )}
              <div className={styles.datePost}>
                {moment(modalGif?.import_datetime).startOf("day").fromNow()}
              </div>
            </div>
            <h3 className={styles.modelGifTitle}>{modalGif?.title}</h3>
          </div>
          <div className={styles.bottom}>
            <Rating rating={modalGif.rating} />

            {views && (
              <div className={styles.modelGifViews}>
                {views.toLocaleString("en-US")} views
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

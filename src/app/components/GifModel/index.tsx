import styles from "./page.module.css";
import { Gif } from "@giphy/react-components";
import Image from "next/image";
import { IGif } from "@giphy/js-types";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import moment from "moment";
import Rating from "../Raiting";
import { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa6";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

type TGifModelProps = {
  setModalGif: any;
  modalGif: IGif | any;
};

export default function GifModel({ setModalGif, modalGif }: TGifModelProps) {
  const modelRef = useRef<HTMLDivElement>(null);
  const [isClickCopy, setIsClickCopy] = useState<boolean>(false);

  const handleOutsideClick = (e: any) => {
    e.preventDefault();

    if (modelRef.current && !modelRef.current.contains(e.target)) {
      setModalGif(undefined);
    }
  };

  const handleCopiedLink = () => {
    if (isClickCopy) return;

    setIsClickCopy(true);
    navigator.clipboard.writeText(modalGif.url);

    setTimeout(() => setIsClickCopy(false), 500);
  };

  return (
    <div className={styles.modelWrapper} onClick={handleOutsideClick}>
      <div className={styles.modelContainer} ref={modelRef}>
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
                  style={{ width: "100%", objectFit: "cover" }}
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
            <div className={styles.modelGifShare}>
              <div>Share on</div>
              <div className={styles.modelGifShareGr}>
                <FacebookShareButton url={modalGif.url}>
                  <FacebookIcon className={styles.modelGifShareIcon} />
                </FacebookShareButton>
                <TwitterShareButton url={modalGif.url}>
                  <TwitterIcon className={styles.modelGifShareIcon} />
                </TwitterShareButton>
                <TelegramShareButton url={modalGif.url}>
                  <TelegramIcon className={styles.modelGifShareIcon} />
                </TelegramShareButton>
                <PinterestShareButton url={modalGif.url} media={modalGif.url}>
                  <PinterestIcon className={styles.modelGifShareIcon} />
                </PinterestShareButton>
                <RedditShareButton url={modalGif.url}>
                  <RedditIcon className={styles.modelGifShareIcon} />
                </RedditShareButton>
              </div>
              <button
                className={
                  isClickCopy
                    ? styles.modelGifShareLinkBtnIsClicked
                    : styles.modelGifShareLinkBtn
                }
                onClick={handleCopiedLink}
              >
                {isClickCopy ? (
                  "Copied"
                ) : (
                  <>
                    <FaLink className={styles.modelGifShareLinkIcon} />
                    Copy GIF Link
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

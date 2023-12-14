import styles from './page.module.css';
import { useContext, useEffect, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Gif } from '@giphy/react-components';
import Image from 'next/image';
import { IGif } from '@giphy/js-types';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';
import moment from 'moment';

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh');

type TGifModelProps = {
  setModalGif: any;
  modalGif: IGif | any;
};

export default function GifModel({ setModalGif, modalGif }: TGifModelProps) {
  useEffect(() => {
    // const res = giphyFetch.gif(modalGif.id);
    // console.log(res);
  }, [modalGif]);

  return (
    <div
      className={styles.modelWrapper}
      onClick={(e) => {
        e.preventDefault();
        setModalGif(undefined);
      }}
    >
      <Gif gif={modalGif} width={400} height={400} />
      <div className={styles.modelRightContent}>
        <Image
          loader={() => modalGif.user.banner_url}
          src={modalGif.user.banner_url}
          alt=''
          width={0}
          height={50}
          style={{ width: '100%' }}
        />
        <div className={styles.headers}>
          <div className={styles.user}>
            <Image
              loader={() => modalGif.user.avatar_url}
              src={modalGif.user.avatar_url}
              alt=''
              width={50}
              height={50}
            />
            <Link target='blank' href={modalGif.user.profile_url}>
              <div className={styles.userDisplayName}>
                {modalGif.user.display_name}
              </div>
              <div className={styles.userUserName}>
                @{modalGif.user.username}
                {modalGif.user.is_verified && (
                  <MdVerified className={styles.userVerifyIcon} />
                )}
              </div>
            </Link>
          </div>
          <div className={styles.datePost}>
            {moment(modalGif.import_datetime).startOf('day').fromNow()}
          </div>
        </div>
        <h3>{modalGif.title}</h3>
      </div>
    </div>
  );
}

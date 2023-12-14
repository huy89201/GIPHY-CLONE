"use client";
import styles from "./page.module.css";
import { useContext, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import {
  Grid,
  Gif,
  SearchBar,
  SearchContextManager,
  SearchContext,
} from "@giphy/react-components";

import ResizeObserver from "react-resize-observer";
import GifModel from "./components/GifModel";


const temp: any = {
  type: "gif",
  id: "aIQkB7ObOo72CFvxbB",
  url: "https://giphy.com/gifs/news-impeachment-inquiry-joe-biden-aIQkB7ObOo72CFvxbB",
  slug: "news-impeachment-inquiry-joe-biden-aIQkB7ObOo72CFvxbB",
  bitly_gif_url: "https://gph.is/g/ZWN0ODz",
  bitly_url: "https://gph.is/g/ZWN0ODz",
  embed_url: "https://giphy.com/embed/aIQkB7ObOo72CFvxbB",
  username: "news",
  source:
    "https://www.c-span.org/video/?532392-4/house-session-part-2&event=532392&playEvent&vod",
  title: "Inquiry GIF by GIPHY News",
  rating: "g",
  content_url: "",
  source_tld: "www.c-span.org",
  source_post_url:
    "https://www.c-span.org/video/?532392-4/house-session-part-2&event=532392&playEvent&vod",
  is_sticker: false,
  import_datetime: "2023-12-13 23:45:24",
  trending_datetime: "2023-12-13 23:45:59",
  images: {
    original: {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      mp4_size: "134911",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
      webp_size: "315868",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
      frames: "24",
      hash: "54e1c73d3e93525e8ff947c7a3c71785",
    },
    downsized: {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    downsized_large: {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    downsized_medium: {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    downsized_small: {
      height: 278,
      width: 480,
      mp4_size: "134911",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-downsized-small.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
    },
    downsized_still: {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
    },
    fixed_height: {
      height: 200,
      width: 345,
      size: "466858",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200.gif&ct=g",
      mp4_size: "80641",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200.mp4&ct=g",
      webp_size: "259764",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200.webp&ct=g",
    },
    fixed_height_downsampled: {
      height: 200,
      width: 345,
      size: "173880",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200_d.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
      webp_size: "120928",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200_d.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
    },
    fixed_height_small: {
      height: 100,
      width: 173,
      size: "163394",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100.gif&ct=g",
      mp4_size: "30292",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100.mp4&ct=g",
      webp_size: "109788",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100.webp&ct=g",
    },
    fixed_height_small_still: {
      height: 100,
      width: 173,
      size: "12831",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
    },
    fixed_height_still: {
      height: 200,
      width: 345,
      size: "34035",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
    },
    fixed_width: {
      height: 116,
      width: 200,
      size: "184248",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w.gif&ct=g",
      mp4_size: "37405",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
      webp_size: "135836",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w.webp&ct=g",
    },
    fixed_width_downsampled: {
      height: 116,
      width: 200,
      size: "69573",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w_d.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
      webp_size: "50624",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w_d.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
    },
    fixed_width_small: {
      height: 58,
      width: 100,
      size: "63751",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100w.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100w.gif&ct=g",
      mp4_size: "14097",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100w.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
      webp_size: "52374",
      webp: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100w.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100w.webp&ct=g",
    },
    fixed_width_small_still: {
      height: 58,
      width: 100,
      size: "4882",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/100w_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
    },
    fixed_width_still: {
      height: 116,
      width: 200,
      size: "17211",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/200w_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
    },
    looping: {
      mp4_size: "1191851",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-loop.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",
      width: null,
      height: null,
    },
    original_still: {
      height: 278,
      width: 480,
      size: "73856",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy_s.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
    },
    original_mp4: {
      height: 278,
      width: 480,
      mp4_size: "134911",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
    },
    preview: {
      height: 168,
      width: 290,
      mp4_size: "38699",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-preview.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
    },
    preview_gif: {
      height: 65,
      width: 112,
      size: "49482",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-preview.gif?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
    },
    preview_webp: {
      height: 94,
      width: 162,
      size: "45908",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-preview.webp?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
    },
    hd: {
      height: 494,
      width: 856,
      mp4_size: "309347",
      mp4: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/giphy-hd.mp4?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=giphy-hd.mp4&ct=g",
    },
    "480w_still": {
      height: 278,
      width: 480,
      size: "1003286",
      url: "https://media3.giphy.com/media/aIQkB7ObOo72CFvxbB/480w_s.jpg?cid=2e904d9dox3h418cs7q6aeimqy2nhj1ed5wuelfyng8ekqei&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
    },
  },
  user: {
    avatar_url: "https://media3.giphy.com/avatars/news/hggHJAb9dlmy.gif",
    banner_image:
      "https://media3.giphy.com/channel_assets/news/s2pdBLQhzA3Z.gif",
    banner_url: "https://media3.giphy.com/channel_assets/news/s2pdBLQhzA3Z.gif",
    profile_url: "https://giphy.com/news/",
    username: "news",
    display_name: "GIPHY News",
    description: "",
    instagram_url: "https://instagram.com/giphy",
    website_url: "",
    is_verified: true,
    suppress_chrome: false,
    is_public: false,
  },
  analytics_response_payload:
    "e=Z2lmX2lkPWFJUWtCN09iT283MkNGdnhiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MmU5MDRkOWRveDNoNDE4Y3M3cTZhZWltcXkybmhqMWVkNXd1ZWxmeW5nOGVrcWVpJmN0PWc",
  analytics: {
    onload: {
      url: "  ad=e%3DZ2lmX2lkPWFJUWtCN09iT283MkNGdnhiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MmU5MDRkOWRveDNoNDE4Y3M3cTZhZWltcXkybmhqMWVkNXd1ZWxmeW5nOGVrcWVpJmN0PWc&action_type=SEEN",
    },
    onclick: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFJUWtCN09iT283MkNGdnhiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MmU5MDRkOWRveDNoNDE4Y3M3cTZhZWltcXkybmhqMWVkNXd1ZWxmeW5nOGVrcWVpJmN0PWc&action_type=CLICK",
    },
    onsent: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFJUWtCN09iT283MkNGdnhiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MmU5MDRkOWRveDNoNDE4Y3M3cTZhZWltcXkybmhqMWVkNXd1ZWxmeW5nOGVrcWVpJmN0PWc&action_type=SENT",
    },
  },
  tags: [],
  is_anonymous: false,
  is_community: false,
  is_featured: false,
  is_hidden: false,
  is_indexable: false,
  is_preserve_size: false,
  is_realtime: false,
  is_removed: false,
  is_dynamic: false,
};

const Components = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext);
  const [gif, setGif] = useState<IGif | null>(null);
  const [modalGif, setModalGif] = useState(temp);
  const [width, setWidth] = useState(1920);

  // giphyFetch.gif(modalGif.id)
  return (
    <>
      {/* <SearchBar />
      <br />
      <Grid
        key={searchKey}
        columns={4}
        gutter={6}
        width={width}
        fetchGifs={fetchGifs}
        onGifClick={(gif, e) => {
          console.log("gif", gif);
          e.preventDefault();
          setModalGif(gif as any);
        }}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      /> */}
      {modalGif && <GifModel modalGif={modalGif} setModalGif={setModalGif} />}
    </>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <SearchContextManager apiKey={process.env.GIPHY_API_KEY!}> */}
      <Components />
      {/* </SearchContextManager> */}
    </main>
  );
}

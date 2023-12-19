"use client";
import styles from "./page.module.css";
import { useContext, useState } from "react";
import TrendingBar from "./components/TrendingBar";
import {
  Grid,
  SearchBar,
  SearchContextManager,
  SearchContext,
} from "@giphy/react-components";

import ResizeObserver from "react-resize-observer";
import GifModel from "./components/GifModel";
import Setting from "./components/Setting";
import { useGloContext } from "./context/gloContext";
import { AnimatePresence } from "framer-motion";

const Components = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext);
  const [modalGif, setModalGif] = useState();
  const [width, setWidth] = useState(1920);
  return (
    <>
      <SearchBar />
      <br />
      <TrendingBar />
      <br />
      <Grid
        key={searchKey}
        columns={4}
        gutter={6}
        width={width}
        fetchGifs={fetchGifs}
        onGifClick={(gif, e) => {
          e.preventDefault();
          setModalGif(gif as any);
        }}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {modalGif && <GifModel modalGif={modalGif} setModalGif={setModalGif} />}
      </AnimatePresence>
    </>
  );
};

export default function Home() {
  const { apiKey: API_KEY } = useGloContext();
  return (
    <main className={styles.main}>
      <Setting />
      <br />
      {API_KEY && (
        <SearchContextManager apiKey={API_KEY}>
          <Components />
        </SearchContextManager>
      )}
    </main>
  );
}

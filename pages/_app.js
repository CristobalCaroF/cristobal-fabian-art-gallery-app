import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("data 1: ", data);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    const info = artPiecesInfo.find((info) => info.slug === slug);
    if (info) {
      const newInfo = artPiecesInfo.map((info) =>
        info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
      );
      setArtPiecesInfo(newInfo);
    } else {
      const newInfo = [...artPiecesInfo, { slug, isFavorite: true }];
      setArtPiecesInfo(newInfo);
    }
    // console.log("art info1: ", artPiecesInfo);
  }
  console.log("art info1: ", artPiecesInfo);
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Art Gallery App!</h1>
      </header>
      <Layout />
      <Component
        {...pageProps}
        piecesData={data}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}

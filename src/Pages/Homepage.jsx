import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Homepage() {
  let [page, setPage] = useState(1);
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);

  let [q, setQ] = useState("");
  let [language, setLanguage] = useState("");
  let [searchParams] = useSearchParams();

  async function ApiData(q, language) {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&language=${language}&sortBy=publishedAt&apiKey=a8bb398166d84d24a439c76586483540`
    );
    response = await response.json();
    if (response.status === "ok") {
      setArticles(response.articles);
      setTotalResults(response.totalResults);
    }
  }
  async function fetchData() {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&language=${language}&sortBy=publishedAt&apiKey=a8bb398166d84d24a439c76586483540`
    );
    response = await response.json();
    if (response.status === "ok") {
      setArticles(articles.concat(response.articles));
    }
  }
  useEffect(() => {
    let q = searchParams.get("q") ?? "All";
    let language = searchParams.get("language") ?? "hi";
    setQ(q);
    setLanguage(language);
    ApiData(q, language);
  }, [searchParams]);
  return (
    <>
      <div className="container-fluid my-3">
        <h5 className="text-center p-2 bg-primary text-light text-capitalize">
          {q} News Articles
        </h5>

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className=" hello text-center my-3 ">
              <button className="btn btn-primary " type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden " role="status">
                  Loading...
                </span>
              </button>
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status ">Loading...</span>
              </button>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewItem
                  key={index}
                  source={item.source?.name}
                  title={item.title}
                  description={item.description}
                  date={item.publishedAt}
                  pic={item.urlToImage}
                  url={item.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

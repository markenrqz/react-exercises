import { useEffect, useState } from "react";
import "./scroll.css"

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const dataSet = await response.json();

      if (dataSet?.products?.length > 0) {
        setData(dataSet.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.mesage);
    }
  }

  function handleScrollPercentage() {
    const scrollProgress = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollProgress / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

//   console.log(scrollPercentage);

if(errorMessage){
    return <div>Error. {errorMessage}</div>
}

  if(loading){
    return <div>Loading data. Please Wait</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

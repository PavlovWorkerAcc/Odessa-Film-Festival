import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'KOrF4OvC0M7t79GvWLfagi81zk3gu_ct-dOStWEKDIU';
        const res = await fetch(`https://api.newscatcherapi.com/v2/search?q=Apple&from=2021/12/15&countries=CA&page_size=1&x-api-key=${apiKey}`);
        const json = await res.json();
        console.log(json)
        if (json && json.news && Array.isArray(json.news)) {
            setNews(json.news);
          }
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();

    
  }, []);

  return (
    <div className="News_Container">
      <div className="News_Content">
        <div className="News_Label">
          <span>Новини</span>
        </div>
        <div className="News_Main">
          {news.map((el, index) => (
            <div className="News_Card">
                <div className="Card_Img" >
                    <img key ={el.id} src={el.image}/>
                    <span key={index}>{el.title}</span>
                    <p>{el.publish_date}</p>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

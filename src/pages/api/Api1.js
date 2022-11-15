import { useEffect, useState } from "react";
import axios from "axios";
import CardApi from "./CardApi";
import AboutApi from "./AboutApi";
import "./api.css";
export default function ApiCalls() {
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="api-base container">
      <div className="row">
        <AboutApi></AboutApi>
      </div>
      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-lg-3 ">
            <CardApi name={item.name} imageUrl={item.image}></CardApi>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Currency.css";

export default function Currency() {
  const [ratesList, setRatesList] = useState([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = async () => {
    const res = await axios.get(
      "http://api.exchangeratesapi.io/v1/latest?access_key=2c405f112220de60f62cabbdf1343955&symbols=USD,JPY,GBP,ILS,AUD,CAD,CHF,CNY,HKD,NZD,RUB"
    );
    const { rates } = res.data;
    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };
  console.log(ratesList);

  return (
    <>
      <div className="container-fluid-currency text-center align-self-center ">
        <div className="row">
          <div className="col">
            <h4>Today Currency</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Base: EUR</p>
          </div>
        </div>

        <div className="row text-center align-self-center">
          <div className="col">
            {ratesList.map((d) => (
              <>
                <span>{d.symbol}-</span>
                <span className="rate">{d.rate}, </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

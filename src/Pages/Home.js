import React from 'react';
import './Home.css'



const TourItem = ({ date, place, specPlace }) => {
  return (
    <div className="tour-item">
      <span className="tour-date">{date}</span>
      <span className="tour-place">{place}</span>
      <span className="tour-spec-place">{specPlace}</span>
      <button className="buy-btn">BUY TICKETS</button>
    </div>
  );
};


const Tours = () => {
  return (
    <section id="tours" className="container">
      <h2>TOURS</h2>
      <div>
        <TourItem date="JUL16" place="DETROIT, MI" specPlace="DTE ENERGY MUSIC THEATRE" />
        <TourItem date="JUL19" place="TORONTO,ON" specPlace="BUDWEISER STAGE" />
        <TourItem date="JUL 22" place="BRISTOW, VA" specPlace="JIGGY LUBE LIVE" />
        <TourItem date="JUL 29" place="PHOENIX, AZ" specPlace="AK-CHIN PAVILION" />
        <TourItem date="AUG 2" place="LAS VEGAS, NV" specPlace="T-MOBILE ARENA" />
        <TourItem date="AUG 7" place="CONCORD, CA" specPlace="CONCORD PAVILION" />
      </div>
    </section>
  );
};

export default Tours;

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import React, { useState } from "react";
import * as officeData from "./gvl.json";
import "./GvlMap.css";

function Map() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 32.06616, lng: 34.79485 }}
    >
      {officeData.features.map((offices) => (
        <Marker
          key={offices.properties.BUSSINESS_ID}
          position={{
            lat: offices.geometry.coordinates[1],
            lng: offices.geometry.coordinates[0],
          }}
          onClick={() => {
            setSelectedOffice(offices);
          }}
          icon={{
            url:
              "https://freesvg.org/img/Commercial_Shipping%20Container_20_.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      ))}

      {selectedOffice && (
        <InfoWindow
          position={{
            lat: selectedOffice.geometry.coordinates[1],
            lng: selectedOffice.geometry.coordinates[0],
          }}
          onCloseClick={() => {
            setSelectedOffice(null);
          }}
        >
          <span className="description-map">
            {selectedOffice.properties.DESCRIPTION}
          </span>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GvlMap() {
  return (
    <>
      <div>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBq-4BnrIPGK5UdiVqF7kH9lOH34oq6BPA`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}

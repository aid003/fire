"use client";
import {
  FullscreenControl,
  Map,
  Placemark,
  RouteEditor,
  YMaps,
} from "@pbe/react-yandex-maps";
import React from "react";
import styles from "./about.module.css";
import "./hideMapPanel.css";

const MapsAbout = () => {
  return (
    <div className={styles.fullMapContainer}>
      <YMaps>
        <div className={styles.mapContainer}>
          <Map
            className={styles.mapsAbout}
            defaultState={{
              center: [56.35235445666282,35.85934517060502],
              zoom: 3.5,
              controls: [],
            }}>
              <Placemark geometry={[59.89553300615726,30.40132883984376]}></Placemark>
              <Placemark geometry={[55.82412678543618,37.573212358104996]}></Placemark>
            <FullscreenControl></FullscreenControl>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default MapsAbout;

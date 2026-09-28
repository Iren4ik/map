import type { YMapLocationRequest } from "ymaps3";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify,
} from "./lib/ymaps3";
import "./App.css";

const SPB: YMapLocationRequest = {
  center: [30.3141, 59.9386], // [долгота, широта] — центр Петербурга
  zoom: 12,
};

function App() {
  return (
    <main className="page">
      <div className="map">
        <YMap location={reactify.useDefault(SPB)}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />

          <YMapMarker coordinates={[30.3246, 59.9357]}>
            <div className="marker" title="Дом Зингера" />
          </YMapMarker>
        </YMap>
      </div>
    </main>
  );
}

export default App;

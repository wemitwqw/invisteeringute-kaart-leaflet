import './App.css'
import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet'
import { AttributionControl, LayersControl, MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import MapLegendControl from './Legend';
import { Invisteeringud } from './components/Invisteeringud';
import { Hooldus } from './components/Hooldus';
import { Laiendamis } from './components/Laiendamis';
import { useState } from 'react';
// import { TooltipCircle } from './components/Test';

function App() {
  const [zoomLevel, setZoomLevel] = useState(8); 

  let initialPosition: LatLngExpression = {
    lat: 58.5974875, 
    lng: 24.9872555
  }

  function MyComponent() {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom());
        console.log(zoomLevel);
      },
    });

    return null;
  }

  return (
    <>
      <MapContainer center={initialPosition} zoom={zoomLevel} scrollWheelZoom={true} attributionControl={false}>
        <MyComponent/>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AttributionControl position='bottomright' prefix={false}/>

        <LayersControl position="topright">
          <Invisteeringud/>
          <Hooldus/>
          <Laiendamis/>
        </LayersControl>

        {/* <TooltipCircle/> */}

        <MapLegendControl/>
      </MapContainer>
    </>
  )
}

export default App;


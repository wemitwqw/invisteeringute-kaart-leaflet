import './App.css'
import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet'
import { AttributionControl, LayersControl, MapContainer, TileLayer } from 'react-leaflet'
import MapLegendControl from './components/Legend';
import { Invisteeringud } from './components/Invisteeringud';
import { Hooldus } from './components/Hooldus';
import { Laiendamis } from './components/Laiendamis';

function App() {

  let initialPosition: LatLngExpression = {
    lat: 58.5974875, 
    lng: 24.9872555
  }

  return (
    <>
      <MapContainer center={initialPosition} zoom={8} scrollWheelZoom={true} attributionControl={false}>
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

        <MapLegendControl/>
      </MapContainer>
    </>
  )
}

export default App;


import './App.css'
import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet'
import { AttributionControl, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { markersHooldus, markersInv, markersLaiendamis } from './data/Data';
import { greenPin, redPin } from './data/Pins';
import MapLegendControl from './Legend';

function App() {

  let initialPosition: LatLngExpression = {
    lat: 58.5974875, 
    lng: 24.9872555
  }

  // function MapComponent() {
  //   const map = useMap()
  //   console.log('map center:', map.getCenter())
  //   return null
  // }

  return (
    <>
      <MapContainer center={initialPosition} zoom={8} scrollWheelZoom={true} attributionControl={false}>
        {/* <MapComponent/> */}

        <AttributionControl position='bottomright' prefix={false}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">
          
          <LayersControl.Overlay checked name="Invisteeringutööd">
            <MarkerClusterGroup
              chunkedLoading
            >
              {(markersInv).map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.geo}
                >
                  <Popup>
                    <p>Name: {marker.meta.name}</p>
                    <p>Job Type: {marker.meta.jobType}</p>
                    <p>Start Year: {marker.meta.startYear}</p>
                    <p>End Year: {marker.meta.endYear}</p>
                    <p>Budget: {marker.meta.budget}</p>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </LayersControl.Overlay>
          
          <LayersControl.Overlay checked name={'Hooldustööd'}>
            <MarkerClusterGroup
              chunkedLoading
            >
              {(markersHooldus).map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.geo}
                  icon={greenPin}
                >
                  <Popup>
                    <p>Name: {marker.meta.name}</p>
                    <p>Job Type: {marker.meta.jobType}</p>
                    <p>Start Year: {marker.meta.startYear}</p>
                    <p>End Year: {marker.meta.endYear}</p>
                    <p>Budget: {marker.meta.budget}</p>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Laiendamistööd">
            <MarkerClusterGroup
              chunkedLoading
            >
              {(markersLaiendamis).map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.geo}
                  icon={redPin}
                >
                  <Popup>
                    <p>Name: {marker.meta.name}</p>
                    <p>Job Type: {marker.meta.jobType}</p>
                    <p>Start Year: {marker.meta.startYear}</p>
                    <p>End Year: {marker.meta.endYear}</p>
                    <p>Budget: {marker.meta.budget}</p>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </LayersControl.Overlay>
          
        </LayersControl>

        <MapLegendControl/>

      </MapContainer>
    </>
  )
}

export default App;


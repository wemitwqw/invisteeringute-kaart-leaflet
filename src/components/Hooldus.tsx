import { LayersControl, Marker, Tooltip } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import { markersHooldus } from "../data/Data"
import { greenPin } from "../data/Pins"

export const Hooldus = () => {
    return (
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
                  <Tooltip>
                    <p>Name: {marker.meta.name}</p>
                    <p>Job Type: {marker.meta.jobType}</p>
                    <p>Start Year: {marker.meta.startYear}</p>
                    <p>End Year: {marker.meta.endYear}</p>
                    <p>Budget: {marker.meta.budget}</p>
                  </Tooltip>
                </Marker>
              ))}
            </MarkerClusterGroup>
        </LayersControl.Overlay>
    )
}
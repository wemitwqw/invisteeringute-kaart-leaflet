import { LayersControl, Marker, Tooltip } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import { markersInv } from "../data/Data"

export const Invisteeringud = () => {
    return (
        <LayersControl.Overlay checked name="Invisteeringutööd">
            <MarkerClusterGroup
              chunkedLoading
            >
              {(markersInv).map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.geo}
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
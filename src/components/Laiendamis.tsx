import { LayerGroup, LayersControl, Polyline, Tooltip } from "react-leaflet"
import { vectorsLaiendamis } from "../data/Data"

export const Laiendamis = () => {
    return (
        <LayersControl.Overlay checked name="Liinide laiendamistööd">
           <LayerGroup>
            {(vectorsLaiendamis).map((vector, index) => (
                <Polyline key={index} pathOptions={ {color: 'red'} } positions={vector.geo} >
                    <Tooltip>
                        <p>Name: {vector.meta.name}</p>
                        <p>Job Type: {vector.meta.jobType}</p>
                        <p>Start Year: {vector.meta.startYear}</p>
                        <p>End Year: {vector.meta.endYear}</p>
                        <p>Budget: {vector.meta.budget}</p>
                    </Tooltip>
                </Polyline>
            ))}
           </LayerGroup>
          </LayersControl.Overlay>
    )
}
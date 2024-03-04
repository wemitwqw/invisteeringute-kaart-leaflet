import { LatLngExpression } from "leaflet"

export interface Vector {
    geo: LatLngExpression[]
    meta: PointData
}
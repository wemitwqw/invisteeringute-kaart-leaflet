import { LatLngExpression } from "leaflet"

export interface Point {
    geo: LatLngExpression
    meta: PointData
}
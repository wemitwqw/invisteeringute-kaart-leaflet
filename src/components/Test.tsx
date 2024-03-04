import { LatLngExpression } from "leaflet"
import { useMemo, useState } from "react"
import { Circle, Tooltip } from "react-leaflet"

export const TooltipCircle = () => {
    let initialPosition: LatLngExpression = {
        lat: 58.5974875, 
        lng: 24.9872555
      }
    
    const [clickedCount, setClickedCount] = useState(0)
        const eventHandlers = useMemo(
          () => ({
            click() {
              setClickedCount((count) => count + 1)
            },
          }),
          [],
        )
      
        const clickedText =
          clickedCount === 0
            ? 'Click this Circle to change the Tooltip text'
            : `Circle click: ${clickedCount}`
      
        return (
          <Circle
            center={initialPosition}
            eventHandlers={eventHandlers}
            pathOptions={{ fillColor: 'blue' }}
            radius={200}>
            <Tooltip>{clickedText}</Tooltip>
          </Circle>
        )
}
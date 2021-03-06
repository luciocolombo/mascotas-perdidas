import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { Marker, Popup } from 'react-leaflet';
function DraggableMarker({ savePosition }) {
  const center = {
    /* lat: -32.959676,
    lng: -60.661406, */
    lat: -32.958796,
    lng: -60.712158,
  };
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(center);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  useEffect(() => {
    savePosition(position);
  }, [position, savePosition]);

  return (
    <div>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Arrastre el marcador'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    </div>
  );
}
export default DraggableMarker;

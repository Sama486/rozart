import * as React from 'react';
//import Mapp from 'react-map-gl';
import Mapp, { Marker } from 'react-map-gl'
import Icon from "./logos/mapbox-icon.png"

function Map() {
    return <Mapp
        initialViewState={{
            longitude: 8.630281048150804,
            latitude: 50.1148752276852,
            zoom: 15
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoic2FtYTQ4NiIsImEiOiJja3ZsMWJuOHMxMXBkMm50a2J5MnhxemRkIn0.LRuKUY4MUUbvjuLUZMOcIg">
        <Marker longitude={8.630281048150804} latitude={50.1148752276852} anchor="bottom" >
            <img src={Icon} style={{ height: 40 }} />
        </Marker>
    </Mapp>
        ;
}
export default Map;
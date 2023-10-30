import React, { useState,useCallback } from 'react'
import ReactMapGl from "react-map-gl"


const Map = () => {

    const [veiwPort, setViewPort] = useState({
        latitude: 40.9729,
        longitude: 29.10457,
        zoom: 9
    })



    return (
        <div className='map-box' >
            <ReactMapGl
                {...veiwPort}
                mapboxAccessToken={'pk.eyJ1IjoiYmV4YXJlaGltbGkiLCJhIjoiY2xvYTE0MDF0MDEwdDJrczJsMDVocHJsMiJ9.u5yBj3A8je9a3aJWgAVybg'}
                onZoom={newport => setViewPort(newport)}

                onDrag={newport => setViewPort(newport)}

                width="100%"
                height="100%"
                transitionDuration="100"
                mapStyle={"mapbox://styles/bexarehimli/cloa4183q00se01qxaksc0rji"}
            >

            </ReactMapGl>
        </div>


    )
}

export default Map
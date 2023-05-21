import React, { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

const CategoryMapMarker = ({data}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <MapMarker
            key={data.id}
            position={{lat: data.y, lng: data.x}}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
        >
            { isVisible && <div style={{ color: "#000"}}>{data.place_name}</div>}
        </MapMarker>
    );
}

export default CategoryMapMarker;
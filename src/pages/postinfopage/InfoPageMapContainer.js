import React, { useState } from "react";
import redMarker from "../../img/redMarker.png";
import CategoryMapMarker from "./mapcomponents/CategoryMapMarker";
import { Map, MapMarker } from 'react-kakao-maps-sdk';


const InfoPageMapContainer = ({x, y, address}) => {
    const center = { lat: x, lng: y };
    const [places, setPlaces] = useState([]);
    
    const FacilityCategorySearch = (category) => {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(`${address} 근처 ${category}`, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                console.log(data);
                setPlaces(data);
            }
        }, { size: 15});
    }

    const categoryMarkerComponents = places.map((data) => (
        <CategoryMapMarker data={data}/>
    ));

    return (
        <Map 
            center={center}   // 지도의 중심 좌표
            level={4}                                   // 지도 확대 레벨
            style= {{
                width: "100%",
                height: "100%",
                zIndex: 0,
                position: "relative"
            }}
        >
            <div>
                <button onClick={() => FacilityCategorySearch('은행')}>은행</button>
                <button onClick={() => FacilityCategorySearch('마트')}>마트</button>
                <button onClick={() => FacilityCategorySearch('주유소')}>주유소</button>
                <button onClick={() => FacilityCategorySearch('약국')}>약국</button>
                <button onClick={() => FacilityCategorySearch('카페')}>카페</button>
                <button onClick={() => FacilityCategorySearch('편의점')}>편의점</button>
            </div>
            <MapMarker 
                position={center} 
                image={{
                    src: redMarker,
                    size: {
                        width: 30,
                        height: 40,
                    },
                }}
            />
            {categoryMarkerComponents}
        </Map>
    );
}

export default InfoPageMapContainer;
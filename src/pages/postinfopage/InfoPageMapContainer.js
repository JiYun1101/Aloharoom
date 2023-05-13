import React, { useState } from "react";
import redMarker from "../../img/redMarker.png";
import CategoryMapMarker from "./mapcomponents/CategoryMapMarker";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Select } from "antd";

const MapStyle = {
    width: "100%",
    height: "100%",
    zIndex: 0,
    position: "relative",
}

const FacilityCategoryMenuDivStyle = {
    position: "absolute", 
    width: "20%",
    height: "8%",
    borderRadius: "1rem",
    top: "1rem",
    left: "1rem"
}

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

    const handleCategoryChange = (value) => {
        FacilityCategorySearch(value);
    }

    const categoryMarkerComponents = places.map((data) => ( <CategoryMapMarker data={data}/> ));

    return (
        <Map 
            center={center}   // 지도의 중심 좌표
            level={4}                                   // 지도 확대 레벨
            style= {MapStyle}
        >
            <div style={FacilityCategoryMenuDivStyle}>
                <Select
                    placeholder="주변편의시설"
                    onChange={handleCategoryChange}
                    style={{
                        width: 120,
                    }}
                    options={[
                        {
                            value: '은행',
                            label: '은행',
                        },
                        {
                            value: '마트',
                            label: '마트',
                        },
                        {
                            value: '주유소',
                            label: '주유소',
                        },
                        {
                            value: '약국',
                            label: '약국',
                        },
                        {
                            value: '카페',
                            label: '카페',
                        },
                        {
                            value: '편의점',
                            label: '편의점',
                        },
                    ]}
                />
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
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import greenMarker from '../../../img/greenMarker.png';
import blueMarker from '../../../img/blueMarker.png';
import redMarker from '../../../img/redMarker.png';
import HomeCategoryMenu from "./HomeCategoryMenu";

const kakaoMapStyle = {
    width: "52%",
    height: "100%",
    zIndex: 0,
    position: "relative"
};

const KakaoMapPart = ({searchStr, cardPostData}) => {
    const [map, setMap] = useState();
    const [mapLevel] = useState(4);
    console.log('cardPostData ', cardPostData);
    useEffect(() => {
        if(!map) return;
        const ps = new window.kakao.maps.services.Places() 
        ps.keywordSearch(searchStr, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds()
                bounds.extend(new window.kakao.maps.LatLng(data[0].y, data[0].x))
                map.setBounds(bounds);
            }
        })
    }, [searchStr])

    const mapMarkerComponents = cardPostData.map((data, index) => (
        <MapMarker 
            key={index} 
            position={{lat: data.x, lng: data.y}}
            image={{
                src: redMarker,
                size: {
                    width: 30,
                    height: 40,
                },
            }}
        />
    ));

    return (
        <>
            <Map 
                center={{ lat: 37.56682420267543, lng: 126.978652258823 }}   // 지도의 중심 좌표
                style={kakaoMapStyle} // 지도 크기
                level={mapLevel}                                   // 지도 확대 레벨
                onCreate={setMap}
            >
                <HomeCategoryMenu/>
                {mapMarkerComponents}
            </Map>
        </>
    );
}

export default KakaoMapPart;
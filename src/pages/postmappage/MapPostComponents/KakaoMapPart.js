import React, { useEffect, useState } from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const kakaoMapStyle = {
    width: "52%",
    height: "100%",
    zIndex: 0
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
        <MapMarker key={index} position={{lat: data.x, lng: data.y}}/>
    ));

    return (
        <>
            <Map 
                center={{ lat: 37.56682420267543, lng: 126.978652258823 }}   // 지도의 중심 좌표
                style={kakaoMapStyle} // 지도 크기
                level={mapLevel}                                   // 지도 확대 레벨
                onCreate={setMap}
            >
                {mapMarkerComponents}
            </Map>
        </>
    );
}

export default KakaoMapPart;
import React, { useEffect, useState } from "react";
import { Map } from 'react-kakao-maps-sdk';
import HomeCategoryMenu from "./HomeCategoryMenu";
import EventMarkerContainer from "./EventMarkerContainer";

const kakaoMapStyle = {
    width: "52%",
    height: "100%",
    zIndex: 0,
    position: "relative"
};

const KakaoMapPart = ({
    searchStr,
    cardPostData,
    setSWLat,
    setSWLon,
    setNELat,
    setNELon,
}) => {
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

    const handleOnCreate = (map) => {
        setMap(map);
        const bounds = map.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();
        // console.log('생성 남서쪽 위도:', swLatLng.getLat());
        // console.log('생성 남서쪽 경도:', swLatLng.getLng());
        // console.log('생성 북동쪽 위도:', neLatLng.getLat());
        // console.log('생성 북동쪽 경도:', neLatLng.getLng());
        // console.log('================================');
        setSWLat(swLatLng.getLat().toString());
        setSWLon(swLatLng.getLng().toString());
        setNELat(neLatLng.getLat().toString());
        setNELon(neLatLng.getLng().toString());
    };

    const handleMapEvent = (map) => {
        const bounds = map.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();
        // console.log('움직인 후 남서쪽 위도:', swLatLng.getLat());
        // console.log('움직인 후 남서쪽 경도:', swLatLng.getLng());
        // console.log('움직인 후 북동쪽 위도:', neLatLng.getLat());
        // console.log('움직인 후 북동쪽 경도:', neLatLng.getLng());
        setSWLat(swLatLng.getLat().toString());
        setSWLon(swLatLng.getLng().toString());
        setNELat(neLatLng.getLat().toString());
        setNELon(neLatLng.getLng().toString());
    }


    const mapMarkerComponents = cardPostData.map((data, index) => (
        <EventMarkerContainer
            key={`EventMarkerContainer-${data.x}-${data.y}`}
            x={data.x}
            y={data.y}
            content={data.address}
            boardId={data.boardId}
        />
    ));

    return (
        <>
            <Map 
                center={{ lat: 37.56682420267543, lng: 126.978652258823 }}   // 지도의 중심 좌표
                style={kakaoMapStyle} // 지도 크기
                level={mapLevel}                                   // 지도 확대 레벨
                onCreate={handleOnCreate}
                onDragEnd={handleMapEvent}
                onZoomChanged={handleMapEvent}
            >
                <HomeCategoryMenu/>
                {mapMarkerComponents}
            </Map>
        </>
    );
}

export default KakaoMapPart;
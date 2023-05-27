import React, { useEffect, useState } from "react";
import { Map } from 'react-kakao-maps-sdk';
import HomeCategoryMenu from "./HomeCategoryMenu";
import EventMarkerContainer from "./EventMarkerContainer";

const kakaoMapStyle = {
    width: "51.5vw",
    height: "100%",
    zIndex: 0,
    position: "relative",
    borderWidth: "0.1rem",
    borderStyle: "solid",
    borderColor: "#bbbbbb"
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
    const centerLat = localStorage.getItem('centerLat') ? parseFloat(localStorage.getItem('centerLat')) : 37.56682420267543;
    const centerLng = localStorage.getItem('centerLng') ? parseFloat(localStorage.getItem('centerLng')) : 126.978652258823;
    const zoomLevel = localStorage.getItem('mapLevel') ? parseInt(localStorage.getItem('mapLevel')) : 4;
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
        localStorage.setItem('centerLat', map.getCenter().getLat());
        localStorage.setItem('centerLng', map.getCenter().getLng());
        localStorage.setItem('mapLevel', map.getLevel());
        setSWLat(swLatLng.getLat().toString());
        setSWLon(swLatLng.getLng().toString());
        setNELat(neLatLng.getLat().toString());
        setNELon(neLatLng.getLng().toString());
    };

    const handleMapEvent = (map) => {
        const bounds = map.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();
        localStorage.setItem('centerLat', map.getCenter().getLat());
        localStorage.setItem('centerLng', map.getCenter().getLng());
        localStorage.setItem('mapLevel', map.getLevel());
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
            homeType={data.homeType}
        />
    ));

    return (
        <>
            <Map 
                center={{ 
                    lat: centerLat, 
                    lng: centerLng 
                }}   
                style={kakaoMapStyle} 
                level={zoomLevel}                                   
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
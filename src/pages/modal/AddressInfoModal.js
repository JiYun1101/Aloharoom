import React from "react";
import { Modal } from "antd";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from "styled-components";

const ModalMapContainer = styled.div`
    height: 450px;
    width: 450px;
`;

const AddressInfoModalStyle = {
    width: "500px",
    height: "500px"
}

const AddressInfoModal = ({
    isAddressInfoModalOpen,
    handleOk,
    handelCancel,
    addressData
}) => {
    console.log('addressData', addressData);
    return (
        <Modal title ="주소확인하기" 
            open={isAddressInfoModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            style={AddressInfoModalStyle}
            width={500}
        >
            {addressData === null ? 
                <div>주소가 존재하지 않습니다.</div>
            :
                <ModalMapContainer>
                    <Map
                        center={{ lat: addressData.y, lng: addressData.x}}
                        level={3}
                        style={{
                            height: "100%",
                            width: "100%",
                            zIndex: 0,
                            position: "relative",
                        }}
                    >
                        <MapMarker position={{ lat: addressData.y, lng: addressData.x}}/>
                    </Map>
                </ModalMapContainer>
            }
        </Modal>
    );
}

export default AddressInfoModal;
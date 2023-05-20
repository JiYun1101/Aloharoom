import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const AddressInfoDiv = styled.div`
    width: 90%;
    height: 4vh;
    display: flex;
    align-items: center;
`;

const AddressInput = styled.input`
    width: 30vw;
    height: 3.5vh;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const AddressInfoSection = ({
    address,
    setAddress,
    searchLatLng,
    showAddressInfoModal
}) => {
    const addressExists = address !== null;
    return (
        <AddressInfoDiv>
            {
                addressExists 
                ? 
                    <AddressInput 
                        type="text" 
                        defaultValue={address}
                        onChange={(e) => { setAddress(e.target.value); }}
                        onBlur={() => { searchLatLng(); }}
                    />
                :
                    <AddressInput 
                        type="text" 
                        onChange={(e) => { setAddress(e.target.value); }}
                        onBlur={() => { searchLatLng(); }}
                    />
            }
            <Button 
                style={{marginLeft: "1vw"}}
                onClick={() => {
                    searchLatLng();
                    showAddressInfoModal();
                }}
            >
                주소확인하기
            </Button>
        </AddressInfoDiv>
    );
}

export default AddressInfoSection;
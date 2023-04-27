import React from "react";
import styled from "styled-components";

const AddressInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const AddressInput = styled.input`
    width: 30rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const AddressInfoSection = ({
    address,
    setAddress,
    searchLatLng
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
        </AddressInfoDiv>
    );
}

export default AddressInfoSection;
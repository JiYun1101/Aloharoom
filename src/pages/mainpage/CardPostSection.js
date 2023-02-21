import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
    position: absolute;
    top: 50rem;
`;

const CardArea = styled.div`
    width: 60rem;
    height: 30rem;
    border-color: blue;
    border-style: solid;
`

const CardPostSection = () => {
    return (
        <CardBox>
            <CardArea/>
        </CardBox>
    );
}

export default CardPostSection;
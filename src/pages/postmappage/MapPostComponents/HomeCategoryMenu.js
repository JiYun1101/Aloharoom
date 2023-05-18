import React from "react";
import styled from "styled-components";
import greenMarker from '../../../img/greenMarker.png';
import blueMarker from '../../../img/blueMarker.png';
import redMarker from '../../../img/redMarker.png';

const categories = ['주택', '아파트', '오피스텔'];

const HomeCategoryMenuDivStyle = {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    borderRadius: "2rem",
    width: "15vw",
    height: "4rem",
    backgroundColor: "white",
    opacity: "0.8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const HomeCategoryMenuSpan = styled.span`
    color: ${props => props.color || "black"};
    font-weight: ${props => props.fontWeight};
`;

const HomeCategoryMarkerImg = styled.img`
    width: 35px;
    height: 30px;
`;

const HomeCategoryMenu = () => {
    return (
        <div style={HomeCategoryMenuDivStyle}>
            {categories.map((category, idx) => {
                if(category === '주택') {
                    return (
                        <>
                            <HomeCategoryMarkerImg key={idx} src={greenMarker} alt="주택"/>
                            <HomeCategoryMenuSpan key={idx} color="green" fontWeight="600">
                                {category}
                            </HomeCategoryMenuSpan>
                        </>
                    );
                }
                else if(category === '아파트') {
                    return (
                        <>
                        <HomeCategoryMarkerImg key={idx} src={redMarker} alt="주택"/>
                        <HomeCategoryMenuSpan key={idx} color="red" fontWeight="600">
                            {category}
                        </HomeCategoryMenuSpan>
                        </>
                    );
                }
                else {
                    return (
                        <>
                        <HomeCategoryMarkerImg key={idx} src={blueMarker} alt="주택"/>
                        <HomeCategoryMenuSpan key={idx} color="blue" fontWeight="600">
                            {category}
                        </HomeCategoryMenuSpan>
                        </>
                    );
                }
            })}
        </div>
    );
}

export default HomeCategoryMenu;
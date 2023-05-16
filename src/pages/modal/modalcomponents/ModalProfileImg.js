import styled from "styled-components";

const ModalProfileImg = styled.img`
    margin-left: ${ props => props.marginLeft || "0rem"};
    width: ${ props => props.width || "0rem"};
    height: ${ props => props.height || "0rem"};
    border-radius: ${ props => props.borderRadius || "0rem"};
`;

export default ModalProfileImg;
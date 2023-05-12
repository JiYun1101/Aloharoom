import styled from "styled-components";

const ModalDiv = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
`;

export default ModalDiv;
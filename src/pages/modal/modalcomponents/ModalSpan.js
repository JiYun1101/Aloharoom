import styled from "styled-components";

const ModalSpan = styled.span`
    color: ${ props => props.color || "#47a5fd"};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin-right: ${props => props.marginRight};
`;

export default ModalSpan;
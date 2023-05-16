import styled from "styled-components";

const ModalFlexDiv = styled.div`
    width: ${props => props.width || "0rem"};
    height: ${props => props.height || "0rem"};
    display: flex;
    flex-direction:${props => props.flexDirection || "row"};
    flex-wrap: ${ props => props.flexWrap};
    align-items:${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    gap: ${props => props.gap};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    overflow-y: ${props => props.overFlowY};
    font-size: ${props => props.fontSize};
    border-bottom: ${props => props.borderBottom};
    &::-webkit-scrollbar {
        width: 0.5rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #bbbbbb;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

export default ModalFlexDiv;
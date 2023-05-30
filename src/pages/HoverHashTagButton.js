import styled from "styled-components";

const HoverHashTagButton = styled.button`
    width: auto;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 1rem;
    background-color: ${(props) => (props.selected ? "#47A5FD" : "white")};
    border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};   
    color: ${(props) => (props.selected ? "white" : "#bbbbbb")};
    //color: ${(props) => (props.selected ? "white" : "#bbbbbb")};
    &:hover {
        background-color: #47A5FD;
        border-color: #47A5FD;
        color: white;
    }
`;

export default HoverHashTagButton;
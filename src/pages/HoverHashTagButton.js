import styled from "styled-components";

const HoverHashTagButton = styled.button`
    width: auto;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 1rem;
    background-color: white;
    border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
    color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
    &:hover {
        border-color: #47a5fd;
        color: #47a5fd;
    }
`;

export default HoverHashTagButton;
import styled from "styled-components";

const CommentInput = styled.input`
    margin-left: 0.5rem;
    border-style: black;
    border-radius: 0.5rem;
    width: ${ props => props.width};
    height: 2rem;
`;

export default CommentInput;
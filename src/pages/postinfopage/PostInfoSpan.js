import styled from "styled-components";

const PostInfoSpan = styled.span`
    width: ${ props => props.width};
    color: ${ props => props.color || "black"};
    font-size: ${ props => props.fontSize || "1rem"};
    font-weight: ${ props => props.fontWeight || "normal"};
    margin-left: ${ props => props.marginLeft || "0rem"};
    margin-top: ${ props => props.marginTop || "0rem"};
    min-height: ${ props => props.minHeight};
`;

export default PostInfoSpan;
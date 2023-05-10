import styled from "styled-components";

const PostInfoDiv = styled.div`
    width: ${ props => props.width || "0%"};
    height: ${ props => props.height || "0rem"};
    margin-top: ${ props => props.marginTop || "0rem"};
    border-bottom: ${ props => props.borderBottom || "none"};
    position: ${props => props.position};
`;

export default PostInfoDiv;
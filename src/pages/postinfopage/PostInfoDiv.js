import styled from "styled-components";

const PostInfoDiv = styled.div`
    width: ${ props => props.width || "0%"};
    height: ${ props => props.height || "0rem"};
    min-height: ${ props => props.minHeight || "0rem"};
    margin-top: ${ props => props.marginTop || "0rem"};
    margin-bottom: ${ props => props.marginBottom || "0rem"};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    border-bottom: ${ props => props.borderBottom || "none"};
    position: ${props => props.position};
`;

export default PostInfoDiv;
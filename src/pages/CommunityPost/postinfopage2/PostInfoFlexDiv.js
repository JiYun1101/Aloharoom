import styled from "styled-components";

const PostInfoFlexDiv = styled.div`
    width: ${ props => props.width || "0%"};
    height: ${ props => props.height};
    min-height: ${ props => props.minHeight || "0rem"};

    display: flex;
    align-items: ${ props => props.alignItems || "stretch"};
    flex-direction: ${ props => props.flexDirection || "row"};
    flex-wrap: ${ props => props.flexWrap || "nowrap"};
    justify-content: ${ props => props.justifyContent || "flex-start" };
    gap: ${ props => props.gap || "0rem"};

    border-style: ${ props => props.borderStyle || "none"};
    border-radius: ${ props => props.borderRadius || "0rem"};
    border-color: ${ props => props.borderColor || "black"};

    border-bottom: ${ props => props.borderBottom || "none"};

    margin-top: ${ props => props.marginTop || "0rem"};
    margin-left: ${ props => props.marginLeft || "0rem"};
    margin-bottom: ${ props => props.marginBottom || "0rem"};

    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
`;

export default PostInfoFlexDiv;
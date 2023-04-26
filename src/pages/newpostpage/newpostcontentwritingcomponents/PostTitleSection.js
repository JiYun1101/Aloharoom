import React from 'react'
import styled from 'styled-components';

const PostTitleDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    height: 3rem;
`;

const PostTitleInput = styled.input`
    width: 99%;
    height: 3rem;
    font-size: 1.3rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 0.1rem #bbbbbb;
    :focus {
        outline: none;
    }
`;

const PostTitleSection = ({ setTitle }) => {
    return (
        <PostTitleDiv>
            <PostTitleInput 
                type="text" 
                placeholder="제목을 입력해주세요." 
                onChange={(e) => { setTitle(e.target.value);}}
            />
        </PostTitleDiv>
    );
}

export default PostTitleSection;
import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";

const PostButtonDiv = styled.div`
    margin-top: 0.5rem;
    width: 90%;
    height: 2rem;
    display: flex;
    flex-direction: row-reverse;
`;

const PostButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 0.3rem;
    background-color: #47a5fd;
    color: white;
`;

const PostButtonSection = ({PostInfoSubmit}) => {
    const updateID = useParams().id;
    const IdExists = updateID != null;
    //수정 페이지일 경우 상태 변수를 변경해주고 그 값을 넣으면 된다.
    if (updateID != null) {
        console.log('수정 페이지일 경우');
    }
    return (
        <PostButtonDiv>
            {
                IdExists 
                ? 
                    <PostButton>
                        수정하기
                    </PostButton>
                :
                    <PostButton onClick={() => {
                        PostInfoSubmit();
                    }}>
                        올리기
                    </PostButton>
            }
        </PostButtonDiv>
    )
}

export default PostButtonSection
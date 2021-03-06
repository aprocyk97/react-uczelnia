import React, { Component, FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISingleComment } from '../../../entities/comments';
import { ISinglePost } from '../../../entities/posts';
import { IState } from '../../../reducers';
import { ICommentsReducers } from '../../../reducers/commentsReducers';
import { IPostsReducers } from '../../../reducers/postsReducers';
import { IUsersReducers } from '../../../reducers/usersReducers';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { FilteredResumes } from './FilteredResumes';

import search from '../../../media/icons/search.svg';


const Wrapper = styled.div`

`;
const TopBar = styled.div`
    display: flex;
    align-items: center;
`;
const StyledTitle = styled.h1`
    font-size:${fontSize[22]};
    font-weight: bold;
    margin: 1vh 2vw;
`;
const FilterInput = styled.input`
    height: 2.5vh;
    font-size:${fontSize[20]};
    
    margin-right: 2vw;
    outline: none;
    appearance: none;
    border: none;
    
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;

    margin-left: auto;

    background-color: #fff;
    padding: 0.5vh 0.5vw;

    border: 1px solid gray;
    border-radius: 5px;
`;

interface IResumeWork {
    title: string;
    className?: string;
    bar?: any;
}

export const ResumeWork: FC<IResumeWork> = (props) => {

    const { commentsList } = useSelector<IState, ICommentsReducers>(globalState => globalState.comments);

    const [filter, setFilter] = useState<string>('');
    const [filteredList, setFilteredList] = useState<ISingleComment[]>(commentsList);

    useEffect(() => {
        setFilteredList(commentsList.filter(item => item.body.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    }, [filter])

    return (
        <Wrapper className={props.className}>
            <TopBar>
                <StyledTitle>{props.title}</StyledTitle>
                <InputWrapper>
                    <FilterInput type='text' value={filter} placeholder='Filter by title...' onChange={e => { setFilter(e.target.value) }} />
                    <img src={search} />
                </InputWrapper>


            </TopBar>
            <div ></div>
            {props.bar}
            <FilteredResumes itemList={filteredList} filter={filter} />
        </Wrapper>
    );
};
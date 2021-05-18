import React, { FC, useEffect, useState } from 'react';
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
    margin-left: auto;
    margin-right: 2vw;
`;

export const ResumeWork: FC = () => {

    const { commentsList } = useSelector<IState,ICommentsReducers>(globalState => globalState.comments);

    const [filter, setFilter] = useState<string>('');
    const [filteredList, setFilteredList] = useState<ISingleComment[]>(commentsList);

    useEffect(() => {
        setFilteredList(commentsList.filter(item => item.body.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    }, [filter])

    return (
        <Wrapper>
            <TopBar>
                <StyledTitle>Resume your work</StyledTitle>
                <FilterInput type='text' value={filter} placeholder='Filter by title...' onChange={e => { setFilter(e.target.value) }} />


            </TopBar>
            <FilteredResumes itemList={filteredList} filter={filter} />
        </Wrapper>
    );
};
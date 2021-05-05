import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISinglePost } from '../../../entities/posts';
import { IState } from '../../../reducers';
import { IPostsReducers } from '../../../reducers/postsReducers';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { FilteredResumes } from './FilteredResumes';


const Wrapper = styled.div`

`;
const TopBar = styled.div`
    display: flex;
`;
const StyledTitle = styled.h1`
    font-size:${fontSize[22]};
    font-weight: bold;
    margin: 1vh 2vw;
`;
const FilterInput = styled.input`

`;

export const ResumeWork: FC = () => {

    const { postsList } = useSelector<IState, IPostsReducers>(globalState => globalState.posts);

    const [filter, setFilter] = useState<string>('');
    const [filteredList, setFilteredList] = useState<ISinglePost[]>(postsList);

    useEffect(() => {
        setFilteredList(postsList.filter(item => item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    }, [filter])

    return (
        <Wrapper>
            <TopBar>
                <StyledTitle>Resume your work</StyledTitle>
                <FilterInput type='text' value={filter} placeholder='Filter by title...' onChange={e => {setFilter(e.target.value)}} />


            </TopBar>
            <FilteredResumes itemList={filteredList} filter={filter} />
        </Wrapper>
    );
};
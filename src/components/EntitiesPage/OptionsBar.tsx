import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';

import arrowDown from '../../media/icons/arrow-down.svg'
import dots from '../../media/icons/dots.svg'

import filter from '../../media/icons/filter.svg'
import exchange from '../../media/icons/exchange.svg'

import expand from '../../media/icons/expand.svg'
import compress from '../../media/icons/compress.svg'

import share from '../../media/icons/share.svg'

import search from '../../media/icons/search.svg'

import broadcast from '../../media/icons/broadcast.svg'

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { FilterBar } from './FilterBar';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;

    height: 3vh;

    .shareWrap{
        border:none;
    }

    .inputWrap{
        margin-left:auto;
    }

    .followedWrap{
        border:none;
    }
`;




const DummySelect = styled.div`
    display: flex;
    flex-direction: row;

    width: 5vw;
    height: 3vh;
    border-radius: 10px;
    align-items: center;
    justify-content: center;

    background-color: ${Colors.lightBlueBackground};

    font-size:${fontSize[18]};
    
    p{
        margin-right: 1vw;
    }

    img{
        width: 10px;
        height: 10px;
    }

    .follow{
        width: 20px;
        height: 20px;
        margin-right: 0.5vw;
    }

    cursor: pointer;
`;
const PartWrapper = styled.div`
    display: flex;
    flex-direction: row;

    border-right: 1px solid gray;
    align-items: center;

    .dots{
        width: 25px;
        height: 25px;
        margin: 0 1vw;

        cursor: pointer;

    }
    
    .filter{      
        width: 20px;
        height: 20px;
        margin: 0 0.5vw; 
    }

    .sort{
        transform: rotate(-90deg);
        width: 20px;
        height: 20px;
        margin: 0 0.5vw; 
    }

    .expand{
        width: 20px;
        height: 20px;
        margin: 0 0.5vw;

        cursor: pointer;
    }

    .share{
        width: 20px;
        height: 20px;
        margin: 0 0.5vw;
    }

    .followed{
        width: auto;
        padding: 0 1vw;
        background-color: transparent;
        border: 3px solid ${Colors.textDarkBlue};
        margin: 0 1vw;
    }
`;
const ImgWrap = styled.div`
    display: flex;
    margin: 0 1vw;

    align-items: center;

    cursor: pointer;
`;

const InputWrapper = styled.div`
    display: flex;

    border: solid 1px ${Colors.textDarkBlue};
    border-radius: 5px;
    height: 100%;
    padding: 0.2vh 1vw;

    margin-right: 1vw;

`;

const StyledTextInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;

    width: 10vw;

    font-size: ${fontSize[18]};
`;


interface IOptionsBar {
    filter: string;
    setFilter: any;

    isSorted: boolean;
    setIsSorted: any;

    isFullscreen: boolean;
    setIsFulscreen:any;
}


export const OptionsBar: FC<IOptionsBar> = (props) => {


    // useEffect(() => {
    //     console.log(filter);
    // }, [filter])

    const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

    const openFilters = () => {
        setFiltersOpen(!filtersOpen);
    }

    const setSorted = () => {
        props.setIsSorted(!props.isSorted);
    }

    const setFullscreen = () => {
        props.setIsFulscreen(!props.isFullscreen);
    }

    return (
        <Wrapper>
            <OptionsWrapper>
                <PartWrapper>
                    <DummySelect>
                        <p>All</p>
                        <img src={arrowDown} />
                    </DummySelect>
                    <img className='dots' src={dots} />
                </PartWrapper>
                <PartWrapper>
                    <ImgWrap onClick={setSorted}>
                        <img className='sort' src={exchange} />
                        <p>Sort</p>
                    </ImgWrap>
                    <ImgWrap onClick={openFilters}>
                        <img className='filter' src={filter} />
                        <p>Filter</p>
                    </ImgWrap>
                </PartWrapper>
                <PartWrapper onClick={setFullscreen}>
                    <img className='expand' src={expand} />
                </PartWrapper>
                <PartWrapper className='shareWrap'>
                    <ImgWrap>
                        <img className='share' src={share} />
                        <p>Share</p>

                    </ImgWrap>
                </PartWrapper>
                <PartWrapper className='inputWrap'>
                    <InputWrapper>
                        <StyledTextInput type='text' value={props.filter} onChange={e => props.setFilter(e.target.value)} placeholder='Search ...' />
                        <img className='search' src={search} />
                    </InputWrapper>
                </PartWrapper>
                <PartWrapper className='followedWrap'>
                    <DummySelect className='followed'>
                        <img className='follow' src={broadcast} />
                        <p>Followed</p>
                        <img src={arrowDown} />
                    </DummySelect>
                </PartWrapper>
            </OptionsWrapper>

            {
                filtersOpen ?
                <FilterBar />
                :
                null
            }
            
        </Wrapper>
    )
}

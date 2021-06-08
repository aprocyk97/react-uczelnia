import React, { FC } from 'react'
import styled from 'styled-components';


import cross from '../../media/icons/cross.svg';
import arrowDown from '../../media/icons/arrow-down.svg';
import plus from '../../media/icons/plus.svg';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 1.5vh;

    .infoText{
        margin: 1vh 0 0 0.5vw;

        color: ${Colors.subtleTextGray};
        
    }

    .addFilter{
        color: ${Colors.linkBlue};
        margin: 2vh 0 0 1vw;
        
    }
`;
const SingleFilter = styled.div`
    display: flex;
    flex-direction: row;

    margin: 1vh 0.5vw;

`;

const FilterButton = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    margin: 0 1vw;

    font-size: ${fontSize[20]};

    .cross{
        width: 25px;
        height: 25px;

        margin-right: 1vw;
    }

    .plus{
        width: 20px;
        height: 20px;

        margin-right: 1vw;
    }

    .arrowDown{
        margin-left: 0.5vw;
        margin-top: 0.4vh;

        width: 12px;
        height: 12px;
    }

    
`;
const DummyInput = styled.input`
    border-radius: 5px;
    outline: none;
    background-color: lightgray;
    border: none;

    height: 3.5vh;
    width: 8.5vw;

    font-size: ${fontSize[18]};

    padding: 0 0.5vw;
`;

export const FilterBar: FC = () => {
    return (
        <FilterWrapper>
            <p className='infoText'>
                Rows are filtered by the following conditions starting from the top.
            </p>
            <SingleFilter>

                <FilterButton>
                    <img className='cross' src={cross} />
                    Where
                </FilterButton>

                <FilterButton>
                    Company
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <FilterButton>
                    Contains
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <DummyInput type='text' disabled={true} placeholder='Type...' />


            </SingleFilter>


            <SingleFilter>
                <FilterButton>
                    <img className='cross' src={cross} />
                    Where
                </FilterButton>

                <FilterButton>
                    Status
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <FilterButton>
                    Is
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <DummyInput type='text' disabled={true} placeholder='Type...' />

                <FilterButton>
                    In
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <DummyInput type='text' disabled={true} placeholder='Entity...' />

            </SingleFilter>


            <SingleFilter>
                <FilterButton>
                    <img className='cross' src={cross} />
                    And
                </FilterButton>

                <FilterButton>
                    Status
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <FilterButton>
                    Ends before
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <DummyInput type='text' disabled={true} placeholder='Date' />

                <FilterButton>
                    In
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>

                <DummyInput type='text' disabled={true} placeholder='Entity...' />


            </SingleFilter>

            <SingleFilter className='addFilter' >
                <FilterButton >
                <img className='plus' src={plus} />
                    Add filter
                </FilterButton>
                <FilterButton >
                    choose property
                    <img className='arrowDown' src={arrowDown} />
                </FilterButton>
            </SingleFilter>

        </FilterWrapper>
    )
}

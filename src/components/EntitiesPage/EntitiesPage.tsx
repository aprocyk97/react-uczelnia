import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import cog from '../../media/icons/cog.svg'
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { EntitiesDisplay } from './EntitiesDisplay';
import fakeBase, { IFakeBase } from './entitiesItems';
import { MosaicSwitch } from './MosaicSwitch';
import { OptionsBar } from './OptionsBar';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    
`;

const FullscreenWrapper = styled.div`

    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 0 2.5%;

    

    position: absolute;
    background-color:${Colors.mainBackgroundColor};
    height: 100%;

    top: 0;
    z-index: 5;

    
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

    height: 8vh;

    

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h1{
        font-size:${fontSize[24]};
        color: ${Colors.strongerTextGray};
        align-items: center;

    }
    .cogImg{
        margin: 0 1.5vw;
        width: 25px;
        height: 25px;

        cursor: pointer;
    }

    .entitiesSwitch{
        margin: 0 2vw 0 auto;

    }
`;



export const EntitiesPage: FC = () => {

    const [isMosaic, SetIsMosaic] = useState<boolean>(true);

    const [isFulscreen, setIsFulscreen] = useState<boolean>(false);


    const [initialItems, setInitialItems] = useState<IFakeBase[]>(fakeBase);

    const [isSorted, setIsSorted] = useState<boolean>(true);


    const [filter, setFilter] = useState<string>('');

    const [filteredItems, setFileredItems] = useState<IFakeBase[]>(initialItems);

    const [sortedItems, setSortedItems] = useState<IFakeBase[]>(filteredItems);



    useEffect(() => {
        if (filteredItems.length !== 0) {
            setSortedItems(filteredItems.filter(item => item.companyName.toLocaleLowerCase().includes(filter)))
        }
    }, [filter])


    useEffect(() => {
        isSorted ?
            setSortedItems(sortedItems.reverse())
            :
            setSortedItems(sortedItems.reverse())
    }, [isSorted])


    return (
        <>
            {
                isFulscreen ?
                <FullscreenWrapper>
                    <TitleWrapper>
                        <div>
                            <h1>
                                Entities
                    </h1>
                            <img className='cogImg' src={cog} />
                        </div>
                        <MosaicSwitch className='entitiesSwitch' isMosaic={isMosaic} setIsMosaic={SetIsMosaic} />
                    </TitleWrapper>
                    <OptionsBar filter={filter} setFilter={setFilter} isSorted={isSorted} setIsSorted={setIsSorted} isFullscreen={isFulscreen} setIsFulscreen={setIsFulscreen} />
                    <EntitiesDisplay items={sortedItems} isMosaic={isMosaic} />

                </FullscreenWrapper>
                :
                <Wrapper>
                    <TitleWrapper>
                        <div>
                            <h1>
                                Entities
                    </h1>
                            <img className='cogImg' src={cog} />
                        </div>
                        <MosaicSwitch className='entitiesSwitch' isMosaic={isMosaic} setIsMosaic={SetIsMosaic} />
                    </TitleWrapper>
                    <OptionsBar filter={filter} setFilter={setFilter} isSorted={isSorted} setIsSorted={setIsSorted} isFullscreen={isFulscreen} setIsFulscreen={setIsFulscreen} />
                    <EntitiesDisplay items={sortedItems} isMosaic={isMosaic} />

                </Wrapper>
            }
        </>
    )

}

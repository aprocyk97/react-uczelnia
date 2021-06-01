import React, { FC } from 'react'
import styled from 'styled-components'

import bars from '../../media/icons/bars.svg'
import mosaic from '../../media/icons/mosaic.svg'
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    

    border-radius: 10px;
    
    width: 8vw;

`;
const ActiveButtonRight = styled.div`
    display: flex;
    
    flex-direction: row;

    align-items: center;

    margin: 0 0 1.5vh 1vw;
    padding-right: 1vw;
    

    border-radius: 0 10px 10px 0;
    
    width: 75%;
    height: 4vh;

    justify-content: center;

    background-color: ${Colors.lightBlueBackground};


    img{
        width: 25px;
        height: 25px;
        margin-right: 0.5vw;
    }

`;
const ActiveButtonLeft = styled.div`
    display: flex;
    
    flex-direction: row;

    align-items: center;

    margin: 0 1vw 1.5vh 0;
    padding-left: 1vw;
    height: 4vh;
    width: 75%;

    border-radius: 10px 0 0 10px;
    
    justify-content: center;
    

    

    background-color: ${Colors.lightBlueBackground};


    img{
        width: 25px;
        height: 25px;
        margin-right: 0.5vw;
        
    }

`;

const InactiveButton = styled.div`
    display: flex;
    
    flex-direction: row;

    height: 5vh;
    width: 25%;
    justify-content: center;

    align-items: center;
    img{
        width: 25px;
        height: 25px;
    }

    margin-left: auto;
    margin-bottom: 1.5vh;
`;


interface IMosaicSwitch {
    isMosaic: boolean;
    setIsMosaic: any;
    className?: string;
}

export const MosaicSwitch: FC<IMosaicSwitch> = (props) => {


    const setView = () => {
        props.setIsMosaic(!props.isMosaic);
    }

    return (
        <Wrapper className={props.className}>
            {
                props.isMosaic ?
                    <>
                        <ActiveButtonLeft>
                            <img src={mosaic} />
                            <p>Mosaic</p>

                        </ActiveButtonLeft>
                        <InactiveButton onClick={setView}>
                            <img src={bars} />
                        </InactiveButton>
                    </>
                    :
                    <>
                        <InactiveButton onClick={setView}>
                            <img src={mosaic} />
                        </InactiveButton>
                        <ActiveButtonRight>
                            <img src={bars} />
                            <p>List</p>
                        </ActiveButtonRight>
                    </>
            }

        </Wrapper>
    )
}

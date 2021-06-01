import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { IState } from '../../reducers';
import { IPhotoReducers } from '../../reducers/photosReducers';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { IFakeBase } from './entitiesItems'



const Wrapper = styled.div`
    margin: 5vh 2vw;

`;
const DisplayList = styled.div`
    display: flex;
    flex-direction: column;
`;
const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 90%;

    padding: 0.5vh 0.5vw;
    margin: 1vh 1vw;

    border-radius: 5px;
    box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.2);

    img{
        height: 125px;
        width: 125px;
    }
    h1{
        font-size: ${fontSize[22]};
        color: ${Colors.textDarkBlue};
        
    }
    div{
        &:last-child{
            display: flex;
            flex-direction: column;
            width: 100%;
            
            h1{
                margin: 2vh 0 0 1vw;
                
            }
            p{
                margin: auto 0 1vh 1vw;
            }
        }

    }
`;


const DisplayMosaic = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const MosaicItem = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 20%;

    padding: 0.5vh 0.5vw;
    margin: 1vh 1vw;

    border-radius: 5px;
    box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.2);

    img{
        height: 125px;
        width: 125px;
    }
    h1{
        font-size: ${fontSize[22]};
        color: ${Colors.textDarkBlue};
        
    }
    div{
        &:last-child{
            display: flex;
            flex-direction: column;
            width: 100%;
            
            h1{
                margin-top: 2vh;
                text-align: center;
            }
            p{
                margin: auto 0 1vh 1vw;
            }
        }

    }



`;


interface IEntitiesDisplay {
    items: IFakeBase[];
    isMosaic: boolean;
}


export const EntitiesDisplay: FC<IEntitiesDisplay> = (props) => {


    const {photosList } = useSelector<IState, IPhotoReducers>(globalState => globalState.photos);

    return (
        <Wrapper>

            {
                props.isMosaic ?
                    <DisplayMosaic>
                        {
                            props.items.map(item => {
                                return (
                                    <MosaicItem>
                                        <div>
                                            <img src={photosList[item.id].thumbnailUrl} />
                                        </div>
                                        <div>
                                            <h1>{item.companyName}</h1>
                                            <p>{item.desc}</p>
                                            <p>{item.city}</p>
                                        </div>

                                    </MosaicItem>
                                )
                            })
                        }

                    </DisplayMosaic>
                    :
                    <DisplayList>
                        {
                            props.items.map(item => {
                                return (
                                    <ListItem>
                                        <div>
                                            <img src={photosList[item.id].thumbnailUrl} />
                                        </div>
                                        <div>
                                            <h1>{item.companyName}</h1>
                                            <p>{item.desc}</p>
                                            <p>{item.city}</p>
                                        </div>
                                    </ListItem>
                                )
                            })
                        }

                    </DisplayList>
            }

        </Wrapper>
    )
}

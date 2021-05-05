import React, { FC, useEffect, useState } from 'react'
import { ISinglePost } from '../../../entities/posts'
import styled from 'styled-components'


interface IFilteredResumes {
    itemList: ISinglePost[];
    filter: string;
}

const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


export const FilteredResumes: FC<IFilteredResumes> = (props) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [displayResumes, setDisplayResumes] = useState<ISinglePost[]>(props.itemList);
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);

    useEffect(() => {
        
        const lastIndex = currentPage * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage;
        const pages = [];
        // console.log(firstIndex)
        // console.log(lastIndex)
        // console.log(props.itemList.slice(firstIndex, lastIndex))
        
        for(let i = 1; i<= Math.ceil(props.itemList.length / itemsPerPage); i++) {
            pages.push(i);
            
        }
        setPageNumbers(pages);
        

        setDisplayResumes(props.itemList.slice(firstIndex, lastIndex));
    }, [props.itemList, currentPage])

    useEffect(() => {
        setCurrentPage(1);
    }, [props.itemList])

    const handleChange = (page: number) => {
        setCurrentPage(page);
    }


    return (
        <>
            
            {
                displayResumes.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })
                
            }

            <PaginationWrapper>
                
            {
                pageNumbers.map(item => {
                    if(item === 1){
                        return <p key={item} onClick={() => {handleChange(item)}}>{item}</p>
                    }
                    if(item === pageNumbers.length){
                        return <p key={item} onClick={() => {handleChange(item)}}>{item}</p>
                    }
                    if( currentPage === 1) {
                        return //TODO
                    }
                })
            }
            </PaginationWrapper>



        </>
    )
}

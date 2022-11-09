import styled from "styled-components";

export const PDPBody = styled.div`
    display: flex;
`

export const AllImages = styled.div`
    display: flex;
`
export const LeftImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SmallImage = styled.img`
    width: 100px;
    height: 100px;
`
export const RightContent = styled.div`
    width: 100px;
    height: 100px;
`
export const Color = styled.div`
    display: flex;
    gap: 10px;
    width: 300px;
`
export const Sizes = styled.div`
    display: flex;
    gap: 10px;
    width: 300px;
    // bord
`
export const Span = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({displayValue}) => displayValue};
    cursor: pointer;

    &:hover {
        border: 2px solid white;
    }
`

export const IndSize = styled.div`
    height: 30px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // margin: auto auto;
    border: 3px solid black;

    &:hover {
        background-color: black;
        color: white;
    }
 }
`

// .square {
//     : #555;
//   }
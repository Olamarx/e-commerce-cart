import styled from "styled-components";



export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    `
    export const PDPBody = styled.div`
    display: flex;
    gap: 30px;
`

export const AllImages = styled.div`
    display: flex;
    gap: 30px;
`
export const LeftImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SmallImage = styled.img`
    width: 70px;
    height: 70px;
`
export const RightContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
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

export const Button = styled.button`
    height: 50px;
    width: 150px;
    background-color: rgb(72, 246, 72);
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 2px;
`

export const Content = styled.div`
    height: fit-content;
    width: 300px;
`


export const IndSize = styled.input`
    height: 30px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
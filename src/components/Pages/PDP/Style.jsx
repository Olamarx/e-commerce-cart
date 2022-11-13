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

export const Content = styled.div`
    height: fit-content;
    width: 400px;
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

export const Ul = styled.ul`
    list-style-type: none;


     li {
        float: left;
        
        margin: 0 5px 0 0;
        width: 80px;
        height: 40px;
        position: relative;
      }
      
       label,
       input {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      
       input[type="radio"] {
        opacity: 0.01;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
       input[type="radio"]:checked+label,
      .Checked+label {
        color: white;
        background: black;
      }
      
       label {
        padding: 5px;
        border: 1px solid #CCC;
        cursor: pointer;
        z-index: 90;
      }
      
       label:hover {
        background: #DDD;
      }
`

export const MainBodyAttri = styled.div`
     display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const AttriLI = styled.div`
display: flex;
`

export const FormLike = styled.div`
    display: inline-block;

    &:not(:last-child) {
    margin-right: 20px;
  }
`

export const AttriH3 = styled.h3`
font-family: Roboto Condensed;
font-weight: 700;
font-size: 18px;
line-height: 18px;
margin-bottom: 8px;
`
export const Input = styled.input`
display: none;

    &:disabled + label {
        background: #efefef;
        color: #666;
        cursor: default;
    }

    &:checked + label {
        border: 5px solid grey;
      }
`

export const Price = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 18px;
`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 292px;
height: 52px;
margin: 40px auto;
color: #ffffff;
background: rgb(72, 246, 72);
border: none;
cursor: pointer;
transition: all 250ms;
`
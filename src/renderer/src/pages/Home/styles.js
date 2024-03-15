import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Section1 = styled.div`
    width: 95%;
    height: 3.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Button = styled.button`
    width: 6.3rem;
    height: 2.3rem;
    background-color: #4CB538;
    box-shadow: 14px 15px 15px -12px rgba(0,0,0,0.49);
    -webkit-box-shadow: 14px 15px 15px -12px rgba(0,0,0,0.49);
    -moz-box-shadow: 14px 15px 15px -12px rgba(0,0,0,0.49);
    color: white;
    border-radius: 0.4rem;
    border: none;
    font-size: medium;
    cursor: pointer;

    font-weight: 500;
    font-family: "Poppins", sans-serif;
    

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }   
`
export const Section2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.p`
    color: #161A49;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    font-style: normal;
`
export const Text1 = styled.p`
    color: #4B505A;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-style: normal;
`
export const Link = styled.a`
    color: #6FBF44;
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    margin-top: 1rem;

    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-style: normal;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }   
`

export const Img = styled.img`
    margin-top: 2rem;
`
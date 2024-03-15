import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Section1 = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    width: 7.6rem;
    height: 2.3rem;
    background-color: #4CB538;
    color: white;
    border-radius: 0.6rem;
    border: none;
    font-size: medium;
    cursor: pointer;

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
`
export const Title = styled.p`
    color: #161A49;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`
export const Text1 = styled.p`
    color: #4B505A;
    text-align: center;
    font-size: 0.5rem;
`
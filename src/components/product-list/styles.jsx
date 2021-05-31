import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;
    background-color: #ebebeb;
    border-radius: 0.8rem;
    transition: 0.2s;

    img {
        border-radius: 0.8rem;
    }

    :hover {
        box-shadow: -.1rem .1rem .5rem #6e6e6e;
        transform: translateY(.5rem);
        transition: 0.2s;
    }
`;

export const List = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;


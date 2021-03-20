import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'RepoBody'
})`
    display: flex;
    flex-direction: column;

    padding: 0 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const Left = styled.div`
    max-width: calc(904px + 16px);
    margin-bottom: 24px;
    padding: 0 8px;

    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1012px) {
        max-width: calc(904px + 32px);
        padding: 0 16px;
    }
`;

export const Right = styled.div`
    padding: 0 8px;

    @media (min-width: 768px) {
        width: 25%;
        max-width: calc(280px + 16px);
    }

    @media (min-width: 1012px) {
        max-width: calc(280px + 32px);
        padding: 0 16px;
    }
`;

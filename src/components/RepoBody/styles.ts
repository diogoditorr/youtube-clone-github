import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'RepoBody'
})`
    display: flex;
    flex-direction: column;

    padding: 0 16px;

    > div.management {
        
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const Left = styled.div`
    max-width: 904px;
    margin-bottom: 24px;
    padding: 0 8px;

    @media (min-width: 768px) {
        width: 75%;
    }
`;

export const Right = styled.div`
    padding: 0 8px;
`;

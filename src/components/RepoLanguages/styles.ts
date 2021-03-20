import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const ProgressBar = styled.div`
    display: flex;
    border-radius: 6px;

    margin-bottom: 8px;

    > div {
        margin-right: 2px;
    }

    > div:first-child {
        border-radius: 6px 0 0 6px;
    }

    > div:last-child {
        margin-right: 0;
        border-radius: 0 6px 6px 0;
    }
`;

export const Bar = styled.div`
    height: 8px;
    background-color: red;
`;

export const LanguageList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const LanguageDetailed = styled.div`
    display: flex;
    align-items: center;

    margin-right: 16px;
    margin-bottom: 6px;

    font-size: 12px;

    cursor: pointer;

    > div {
        /* padding: 0 8px; */
        margin-right: 8px;

        > span {
            display: block;
            width: 8px;
            height: 8px;

            border-radius: 50%;
        }
    }

    .name {
        margin-right: 4px;
        font-weight: 600;
    }

    .porcentage {
        color: rgb(88, 96, 105);
    }

    &:hover {
        .name, .porcentage {
            color: #0366d6;
        }
    }
`;
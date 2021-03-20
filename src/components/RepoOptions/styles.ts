import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'RepoOptions'
})`
    display: flex;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-left: 8px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Button = styled.div`
    display: flex;
    align-items: center;

    width: fit-content;

    padding: 5px 16px;

    background-color: #fafbfc;
    color: #24292e;

    cursor: pointer;

    border: 1px solid rgba(26, 31, 35, 0.15);
    border-radius: 6px;

    > span {

        font-size: 14px;
        font-weight: 500;
    }

    > svg:first-child {
        fill: rgb(88, 96, 105);
        margin-right: 4px;
    }

    > svg:last-child {
        margin-top: 4px;
        margin-left: 8px;
    }

    &.green {
        background-color: #2ea44f;

        > span {
            color: white;
        }

        > svg {
            fill: #d5eddc;

            > path {
                fill: #d5eddc;
            }
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 8px 16px;

    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: var(--border);
    
    font-size: 14px;

    &:hover {
        background-color: #f6f8fa;
    }
`;

export const FileIcon = styled.div`
    display: flex;
    padding: 0 16px;

    &.folder {
        > svg {
            fill: #79b8ff;
        }
    }
`;

export const Name = styled.div`
    min-width: 73px;
    width: 16.66667%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-right: 16px;

    @media (max-width: 768px) {
        min-width: initial;
        width: 100%;
    }
`;

export const LastCommit = styled.div`
    width: 100%;

    color: #6a737d;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LastCommitDate = styled.div`
    margin-left: 24px;

    color: #6a737d;

    white-space: nowrap;
`;

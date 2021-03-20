import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'RepoFiles'
})`
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    padding: 16px;

    font-size: 14px;

    background-color: #f1f8ff;

    border: 1px solid #c8e1ff;
    border-radius: 6px 6px 0 0;
`;

export const Avatar = styled.img`
    width: 24px;
    height: 24px;

    border-radius: 50%;
`;

export const Overflow = styled.div`
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > span {
        display: inline;
        
        margin-left: 5px;
        
        color: #24292e;
        font-weight: 600;
    }
`;

export const LastCommit = styled.div`
    display: inline;

    width: 100%;

    margin-left: 4px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const LastCommitDate = styled.div`
    margin-left: 16px;
    
    white-space: nowrap;
    color: #586069;
`;

export const Commits = styled.div`
    display: flex;
    align-items: center;
    
    margin-top: 1px;
    padding-left: 16px;

    > span {
        margin-left: 4px;
        margin-bottom: 1px;

        color: #24292e;
        font-weight: 600;

        white-space: nowrap;

        > small {
            font-size: 14px;
            font-weight: 400;
            color: #586069;
        }
    }

    @media (max-width: 768px) {
        > span {
            > small {
                display: none;
            }
        }
    }

    @media (max-width: 540px) {
        > span {
            display: none;
        }
    }
`;

export const Body = styled.div`
    > div:last-child {
        border-radius: 0 0 6px 6px;
    }
`;


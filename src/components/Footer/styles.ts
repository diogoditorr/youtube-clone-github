import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div.attrs({
    className: 'Footer'
})`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 25px 32px;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
    margin-top: 25px;

    fill: var(--border);
    width: 24px;
    height: 24px;
    // Não amassa a logo
    flex-shrink: 0;
`;

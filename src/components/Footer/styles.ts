import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div.attrs({
    className: 'Footer'
})`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* margin: 25px 32px; */
    /* margin: 0 94px;  */

    > ul {
        display: flex;
        align-items: center;

        width: 90%;

        padding: 40px 0;

        /* .logo {
            margin: 0 
        } */

        > div.field-group {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;

            li:not(.copyright) {
                font-size: 12px;
                color: #0366d6;

                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }

            .copyright {
                font-size: 12px;
                color: #586069;
            }
        }
    }

    @media (max-width: 1012px) {
        > ul {
            width: 50%;
            flex-direction: column;

            .field-group:first-child {
                margin-bottom: 4px;
            }

            > li.logo {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        > ul {
            width: 70%;
        }
    }

    @media (max-width: 400px) {
        > ul {
            width: 90%;
        }
    }
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
    /* margin-top: 25px; */
    margin: 0 clamp(48px, 5vw, 96px);

    fill: var(--border);
    width: 24px;
    height: 24px;
    // Não amassa a logo
    flex-shrink: 0;
`;

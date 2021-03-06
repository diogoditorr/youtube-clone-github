import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'TabContent'
})`
    .wrapper {
        display: flex;
        align-items: center;

        overflow-x: auto;

        /* padding-bottom: 4px; */
        
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #d9d9d9;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
            /* background-color: #d9d9d9; */
            border-radius: 4px;
            margin: 0 -6px;
        }

        .content {
            display: flex;
            align-items: center;
            white-space: nowrap;

            padding: 14px 16px;

            border-bottom: 2px solid transparent;
            
            cursor: pointer;

            .label {
                font-size: 14px;
                padding-left: 7px;
            }

            .number {
                font-size: 12px;
                font-weight: 500;
                background: var(--ticker);
                margin-left: 7px;
                padding: 2px 8px;
                border-radius: 24px;
            }

            > svg {
                opacity: 0.5;
            }

            &.active {
                border-bottom: 2px solid var(--orange);

                .label {
                    font-weight: 600;
                }

                > svg {
                    opacity: 1;
                }
            }

            &:not(.active):hover, &:not(.active):focus {
                border-bottom: 2px solid var(--border);
            }

            transition: border-bottom-color 0.2s ease-in;
        }
    }

    .line {
        display: flex;
        width: calc(100% + 32px);
        border-bottom: 1px solid var(--border);
        margin-left: -16px;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 20px;
    width: 20px;    
`;

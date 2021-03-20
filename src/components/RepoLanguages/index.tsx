import React, { CSSProperties } from 'react';

import { Container, ProgressBar, Bar, LanguageList, LanguageDetailed } from './styles';

interface Language {
    name: string;
    realName: string;
    porcentage: string;
}

interface Props {
    languages: Array<Language>;
}

const RepoLanguages: React.FC<Props> = ({
    languages
}) => {
    return (
        <Container>

            <ProgressBar>
                {
                    languages.map((language, index) => {
                        const barStyled: CSSProperties =  {
                            backgroundColor: `var(--${language.name})`,
                            width: language.porcentage,
                        };

                        return <Bar key={index} style={barStyled}></Bar>;
                    })
                }
            </ProgressBar>

            <LanguageList>
                {
                    languages.map((language, index) => {
                        const circleColor: CSSProperties = {
                            backgroundColor: `var(--${language.name})`
                        };

                        return (
                            <LanguageDetailed key={index}>
                                <div>
                                    <span style={circleColor}></span>
                                </div>
                                <span className="name">{language.realName}</span>
                                <span className="porcentage">{language.porcentage}</span>
                            </LanguageDetailed>
                        );
                    })
                }
            </LanguageList>
        </Container>
    );
}

export default RepoLanguages;
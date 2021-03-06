import React from 'react';

import { AnyStyledComponent } from 'styled-components';

import { Container, IconContainer } from './styles';

// Array<AnyStyledComponent | React.FunctionComponent>

interface Props {
    icons: Array<AnyStyledComponent | React.FunctionComponent | any>,
    labels: Array<String>
}

const TabContent: React.FC<Props> = ({
    icons,
    labels
}) => {

    const tabs = icons.map((icon, index) => {
        return {
            id: index,
            icon: icon, 
            name: labels[index]
        }
    })

    console.log(tabs)

    return (
        <Container>
            <div className="wrapper">
                {tabs.map(item => (
                    <div className={`content ${item['id'] === 0 ? 'active' : '' }`} key={item['id']}>
                        <IconContainer>
                            {item['icon']}
                        </IconContainer>
                        <span className="label">{item['name']}</span>
                    </div>
                ))}
            </div>
            <span className="line"/>
        </Container>
    );
}

export default TabContent;
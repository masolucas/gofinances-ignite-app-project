import React from 'react';
import { TouchableOpacityProps } from 'react-native';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
};

import {
    Container,
    Icon,
    Title
} from './styles';

interface Props extends TouchableOpacityProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({ type, title, isActive, ...rest } : Props){
    return (
        <Container {...rest} type={type} isActive={isActive}>
            <Icon type={type} name={icons[type]}/>
            <Title>
                { title }
            </Title>
        </Container>
    );
}
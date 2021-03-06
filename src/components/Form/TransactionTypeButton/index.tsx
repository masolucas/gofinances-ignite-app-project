import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
};

import {
    Container,
    Button,
    Icon,
    Title
} from './styles';

interface Props extends RectButtonProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({ type, title, isActive, ...rest } : Props){
    return (
        <Container type={type} isActive={isActive}>
            <Button {...rest}>
                <Icon type={type} name={icons[type]}/>
                <Title>
                    { title }
                </Title>
            </Button>
        </Container>
    );
}
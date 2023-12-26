/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const TypingIndicator = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => {
                return prevDots === '....' ? '.' : prevDots + '.';
            });
        }, 400);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Text style={{ fontSize: 27.5, marginTop: -22.5, marginBottom: -6, color: "white" }}>{dots}</Text>
    );
};

export default TypingIndicator;

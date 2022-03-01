import React from 'react';
import { Text } from 'react-native'

interface Props {
    children: string;
    fontFam: string;
    style?: [] | {};
}

// custum font 설정 component
const DefaultText = ({ children, fontFam, style }: Props) => {

    // 배열 형식으로 폰트 fontStyle 변수에 담기 
    let textStyle: any[] = [{ fontFamily: fontFam }]
    if (style) {
        // style 이 Array 라면 concat으로 합치기 
        if (Array.isArray(style)) {
            textStyle = textStyle.concat(style)
        } else {
            // Array가 아니라면 push하기 
            textStyle.push(style)
        }
    }

    return (
        <Text style={textStyle}>
            {children}
        </Text>
    )
}

export default DefaultText
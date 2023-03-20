import React from 'react';

import styled from 'styled-components';


interface LButtonProps {
    colorTheme: string

}

export const LButton = styled.button<LButtonProps>`
  background-color: ${props => chooseBGColor(props.colorTheme)};
  color: ${props => chooseTxtColor(props.colorTheme)};
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;


function chooseBGColor(colorTheme: string): string {
    if (colorTheme === "green") return "#07C88E"
    else if (colorTheme === "grey") return "#3E507214"
    return "#3E507214"
}

function chooseTxtColor(colorTheme: string): string {
    if (colorTheme === "green") return "white"
    else if (colorTheme === "grey") return "#000B26CC"
    return "#000B26CC"
}
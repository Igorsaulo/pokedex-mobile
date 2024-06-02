import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

type ViewProps = {
    type: string;
}
export const Container = styled.ScrollView<ViewProps>`
    ${({ theme, type }) => css`
    flex: 1;
    background-color: ${theme.types.backgrounds[type]};
    `};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const Header = styled.View<ViewProps>`
    ${({ theme, type }) => css`
    flex: 1;
    width: 100%;
    height: 300px;
    background-color: ${theme.types.backgrounds[type]};
    padding: 20px;
    align-items: center;
    gap: 20px;
    flex-direction: row;
    `};
`;

export const PokemonImage = styled.Image`
    width: 130px;
    height: 130px;
    margin-top: -40px;
    z-index: 1;
    background-color: "black";
`;

export const CircleImage = styled.ImageBackground`
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 90px;
    z-index: 0;
`;

export const PokemonLeftSide = styled.View`
    width: 50%;
    position: relative;
`;

export const PokemonId = styled.Text`
    ${({ theme }) => css`
        font-size: 12px;
        color: ${theme.texts.number};
        font-weight: bold;
    `}
`;

export const PokemonName = styled.Text`
    ${({ theme }) => css`
        font-size: 25px;
        line-height: 30px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.texts.with};
        font-weight: bold;
    `}
`;

export const ImageCardDetail = styled.Image`
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
    position: absolute;
`;

export const PokemonContentTypes = styled.View`
   flex-direction: row;
`;

export const PokemonType = styled.View<ViewProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.types[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 5px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`;

export const PokemonTypeText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.texts.with};
        font-size: 10px;
        text-transform: capitalize;
    `}
`;

export const PatternImage = styled.Image`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 30px;
    right: -40px;
    z-index: 0;
`;

export const Content = styled.View`
    ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.backgrounds.secondary};
    padding: 20px;
    height: ${windowHeight - 280}px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    `};
`;


export const ContentTitle = styled.Text<ViewProps>`
    ${({ theme, type }) => css`
    font-size: 20px;
    color: ${theme.types[type]};
    font-weight: bold;
    margin-bottom: 10px;
    `};
`;

export const StatusBar = styled.View`
    width: 100%;
    padding: 10px 0px;
    flex-direction: row;
    align-items: center;
`;

export const AttributesContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
`;

export const Attributes = styled.Text`
    ${({ theme }) => css`
    font-style: normal;
    line-height: 14px;
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${theme.texts.gray};
    `};
`;

export const AttributeValue = styled.Text`
    ${({ theme }) => css`
    font-style: normal;
    line-height: 19px;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: right;
    color: ${theme.texts.gray};
    margin-left: 20px;
    `};
`;

export const ContentBar = styled.View`
    margin-left: 20px;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #f0f0f0;
`;

type BarProps = {
    value: number;
} & ViewProps;

export const ContentBarValue = styled.View<BarProps>`
    ${({ theme, type, value }) => css`
    width: 100%;
    height: 5px;
    background-color: ${theme.types[type]};
    border-radius: 5px;
    width: ${value}%;
    `};
`;

export const ContentBarValueStatus = styled.View`
    ${({ theme }) => css`
    width: 100%;
    height: 5px;
    background-color: ${theme.types.backgrounds.walter};
    border-radius: 5px;
    `};
`;
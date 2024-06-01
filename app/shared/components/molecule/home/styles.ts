import styled, { css } from 'styled-components/native';

type PokemonCardProps = {
    type: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonCardProps>`
    ${({ theme, type }) => css`
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        flex-direction: row;
        background-color: ${theme.types.backgrounds[type]};
    `}
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

export const PokemonType = styled.View<PokemonCardProps>`
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

export const PokemonRightSide = styled.View`
    width: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
`;


export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
    z-index: 1;
`;

export const PokeballImage = styled.Image`
    position: absolute;
    right: -20px;
    width: 100px;
    height: 100px;
    top: -20px;
    z-index: 0;
`;
import * as S from "./styles";
import detail from "@/assets/images/detail.png";
import pokeball from "@/assets/images/Pokeball.png";
import { TouchableOpacityProps } from "react-native";

export type PokemonType = {
    type: {
        name: string;
    }

}

export type Pokemon = {
    id: number;
    name: string;
    url: string;
    types: PokemonType[];
}

type Props = {
    data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
    return (
        <S.PokemonCard type={data.types[0].type.name} {...rest}>
            <S.PokemonLeftSide>
                <S.PokemonId>#{data.id}</S.PokemonId>
                <S.PokemonName>{data.name}</S.PokemonName>
                <S.ImageCardDetail source={detail} />
                <S.PokemonContentTypes>
                    {data.types.map((type, index) => (
                        <S.PokemonType key={index} type={type.type.name}>
                            <S.PokemonTypeText>{type.type.name}</S.PokemonTypeText>
                        </S.PokemonType>
                    ))}
                </S.PokemonContentTypes>
            </S.PokemonLeftSide>
            <S.PokemonRightSide>
                <S.PokemonImage source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png" }} />
                <S.PokeballImage source={pokeball} />
            </S.PokemonRightSide>
        </S.PokemonCard>
    )
}

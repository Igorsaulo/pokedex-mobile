import React, { useEffect, useState } from "react"
import { useRoute, useNavigation } from "@react-navigation/native"
import api from "@/app/services/api";
import * as S from "./styles";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import circle from "@/assets/images/Circle.png";
import pattern from "@/assets/images/Pattern.png";

type RouteParams = {
  pokeId: number;
}

export function Detail() {
  const route = useRoute();
  const [pokemon, setPokemon] = useState<any>({} as any);
  const { goBack } = useNavigation();
  const { pokeId } = route.params as RouteParams;
  console.log(pokeId);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await api.get(`/pokemon/${pokeId}`);
      const { stats, types, name, abilities, id } = response.data
      setPokemon({ stats, types, name, abilities, id });
    }
    fetchPokemon();
  }, [pokeId]);


  return (
    <S.Container type={pokemon.types && pokemon.types[0].type.name}>
      <S.Header type={pokemon.types && pokemon.types[0].type.name}>
        <S.BackButton onPress={() => goBack()}>
          <Feather name="chevron-left" size={24} color="#fff" />
        </S.BackButton>
        <S.PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} />
        <S.PokemonLeftSide>
          <S.PokemonId>#{pokemon.id}</S.PokemonId>
          <S.PokemonName>{pokemon.name}</S.PokemonName>
          <S.PokemonContentTypes>
            {pokemon.types && pokemon.types.map((type: any, index: number) => (
              <S.PokemonType key={index} type={type.type.name}>
                <S.PokemonTypeText>{type.type.name}</S.PokemonTypeText>
              </S.PokemonType>
            ))}
          </S.PokemonContentTypes>
        </S.PokemonLeftSide>
        <S.CircleImage source={circle} />
        <S.PatternImage source={pattern} />
      </S.Header>
      <S.Content>
        <S.ContentTitle type={
          pokemon.types && pokemon.types[0].type.name
        }>Base Stats</S.ContentTitle>
        {
          pokemon.stats && pokemon.stats.map((atribute: { stat: { name: React.Key | null | undefined; }; base_stat: React.Key | null | undefined; }) =>
            <S.StatusBar key={atribute.stat.name}>
              <S.AttributesContainer>
              <S.Attributes>{String(atribute.stat.name)}</S.Attributes>
              <S.AttributeValue>{String(atribute?.base_stat)}</S.AttributeValue>
              </S.AttributesContainer>
              <S.ContentBar>
                <S.ContentBarValueStatus>
                  <S.ContentBarValue type={pokemon.types && pokemon.types[0].type.name} value={Number(atribute.base_stat)} />
                </S.ContentBarValueStatus>

              </S.ContentBar>
            </S.StatusBar>
          )
        }
      </S.Content>
    </S.Container>
  )
}
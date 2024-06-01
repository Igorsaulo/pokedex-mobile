import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "@/app/services/api";
import { Card } from "@/app/shared/components/molecule/home/card";
import { FlatList } from "react-native";
import { Pokemon } from "@/app/shared/components/molecule/home/card";


export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect (() => {
        async function fetchPokemons() {
            const response = await api.get('/pokemon');
            const { results } = response.data;

            const payloadPokemons : Pokemon[] = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const response = await api.get(pokemon.url);
                    return response.data;
                })
            );

            setPokemons(payloadPokemons);
        }
        fetchPokemons();
    }, []);
    return (
        <S.Container>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                        <Card data={item} />
                )}
            />
    </S.Container>
    )
}
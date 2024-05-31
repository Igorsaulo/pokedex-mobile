import React from "react";
import * as S from "./styles";
import AnimatedLottieView from "lottie-react-native";
import pokeballAnimated from "./pokeball.json";
import { ClickButton } from "@/shared/components/atomic/buttons/clickButton";

export function Welcome() {
    return (
        <S.Container>
        <S.Content>
            <S.WapperAnimation>
            <AnimatedLottieView
                source={pokeballAnimated}
                autoPlay
                loop
                style={{
                    width: "100%",
                    height: 200,
                }}
            />
            </S.WapperAnimation>
            <S.Title>Seja bem-vindo ao Pokedex</S.Title>
            <S.Subtitle>Escolha um Pokémon para ver mais detalhes</S.Subtitle>
        </S.Content>
        <S.Footer>
            <ClickButton />
        </S.Footer>
    </S.Container>
    )
}	
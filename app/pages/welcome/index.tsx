import React from "react";
import * as S from "./styles";
import AnimatedLottieView from "lottie-react-native";
import pokeballAnimated from "./pokeball.json";
import { ClickButton } from "@/app/shared/components/atomic/buttons/clickButton";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
    const { navigate } = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigate("Home");
    }
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
            <ClickButton title="Começar" onPress={handleNavigate} />
        </S.Footer>
    </S.Container>
    )
}	
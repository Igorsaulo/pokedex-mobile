import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
    title: string;
} & TouchableOpacityProps;

export function ClickButton({ title, ...rest }: Props) {
    return (
        <S.Container>
            <S.Button  {...rest}>
                <S.TextButton>{title}</S.TextButton>
            </S.Button>
        </S.Container>
    )
}
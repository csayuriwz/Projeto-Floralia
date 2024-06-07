import styled from "styled-components";

export const InputLinhaVerde = styled.TextInput.attrs({
    placeholderTextColor: "#386E17"
})`
    width: 90%;
    height: 51px;
    padding: 10px 40px 10px 10px;
    margin-top: 15px;
    background-color: "F6F6F6";

    border-bottom-width: 2px;
    border-bottom-color: #386E17;
    border-radius: 5px;

    font-size: 14px;
    font-family: "Exo2_600SemiBold";
    color: #386E17;
`

export const InputErro = styled.TextInput.attrs({
    placeholderTextColor: "#FF0000"
})`
    width: 90%;
    height: 51px;
    padding: 10px 40px 10px 10px;
    margin-top: 15px;
    background-color: "F6F6F6";

    border-bottom-width: 2px;
    border-bottom-color: #FF0000;
    border-radius: 5px;

    font-size: 14px;
    font-family: "Exo2_600SemiBold";
    color: #FF0000;
`
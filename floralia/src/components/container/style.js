import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  gap: 5px;
`;

export const BoxCard = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  border: 2px;
`;

export const CardTextContainer = styled.SafeAreaView`
  flex-direction: column;
  padding-right: 12px;
  width: 50%;
  height: 80px;
  align-self: center;
  margin-left: 0px;
  gap: 3px;
`;

export const FlatContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 60px;
`;

export const HrProfile = styled.SafeAreaView`
  width: 90%;
  height: 3px;
  background-color: #1c4b00;
  border-radius: 2px;
  margin-bottom: 35px;
`;

export const BackgroundIcon = styled.SafeAreaView`
  width: 56px;
  height: 56px;
  background-color: #ffecf2;
  align-items: center;
  border-radius: 70px;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  gap: 5px;
`;

export const ContainerSecure = styled.View`
  width: 100%;
  height: 90px;
  margin-left: 10%;
  margin-bottom: 18px;
  margin-top: -25px;
`;

export const ViewNovoAqui = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

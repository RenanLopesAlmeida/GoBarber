import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          marginBottom: 40,
          color: '#FFF',
          fontFamily: 'RobotoSlab-Regular',
          fontSize: 18,
        }}
      >
        I'm working on it, please come back later
      </Text>
      <Button onPress={signOut}>
        <ButtonText>Exit</ButtonText>
      </Button>
    </View>
  );
};

export default Dashboard;

const Button = styled.TouchableOpacity`
  height: 60px;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ff9000;
`;

const ButtonText = styled.Text`
  padding-top: 30px;
  margin-bottom: 40px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
`;

import React from 'react';
import { View, Text, Button } from 'react-native';

const RoutinesScreen = ({ navigation }) => {
  // Sport, nutrition, beauté personnalisées
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Routines Personnalisées</Text>
      <Text>Sport: [Programme ciblé]</Text>
      <Text>Nutrition: [Plan adapté]</Text>
      <Text>Beauté: [Skincare et maquillage]</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RoutinesScreen;
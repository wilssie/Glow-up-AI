import React from 'react';
import { View, Text, Button } from 'react-native';

const StyleModuleScreen = ({ navigation }) => {
  // Intégration Pinterest, moodboards, suggestions, try-on virtuel
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Module Style & Visuel</Text>
      <Text>Moodboards personnalisés: [Placeholder]</Text>
      <Text>Suggestions tenues: [Placeholder]</Text>
      <Text>Recommandations coiffures & maquillage: [Placeholder]</Text>
      <Text>Essayage virtuel (AI TRY-ON): [Placeholder]</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default StyleModuleScreen;
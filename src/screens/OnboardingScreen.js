import React, { useState } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const OnboardingScreen = ({ navigation }) => {
  const [facePhoto, setFacePhoto] = useState(null);
  const [bodyPhoto, setBodyPhoto] = useState(null);

  const selectPhoto = (type) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Erreur', response.errorMessage);
        return;
      }
      const source = { uri: response.assets[0].uri };
      if (type === 'face') setFacePhoto(source);
      else setBodyPhoto(source);
    });
  };

  const proceed = () => {
    if (!facePhoto || !bodyPhoto) {
      Alert.alert('Erreur', 'Veuillez uploader les photos requises.');
      return;
    }
    // Ici, envoyer les photos à l'IA pour analyse
    // Placeholder: navigation.navigate('Questionnaire');
    navigation.navigate('Questionnaire');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Onboarding Glow Up AI</Text>
      <Text>Photo visage (face + profil)</Text>
      <Button title="Sélectionner photo visage" onPress={() => selectPhoto('face')} />
      {facePhoto && <Image source={facePhoto} style={{ width: 100, height: 100, margin: 10 }} />}
      
      <Text>Photo corps (plein pied)</Text>
      <Button title="Sélectionner photo corps" onPress={() => selectPhoto('body')} />
      {bodyPhoto && <Image source={bodyPhoto} style={{ width: 100, height: 100, margin: 10 }} />}
      
      <Button title="Continuer" onPress={proceed} />
    </View>
  );
};

export default OnboardingScreen;
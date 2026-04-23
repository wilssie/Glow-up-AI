import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Picker } from 'react-native';

const QuestionnaireScreen = ({ navigation }) => {
  const [answers, setAnswers] = useState({
    objectif: '',
    mood: '',
    imageDesiree: '',
    probleme: '',
    budget: '',
    discipline: '',
    inspirations: '',
    lifestyle: '',
    temps: '',
    deadline: ''
  });

  const updateAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const submit = () => {
    // Envoyer à IA pour créer profil
    // Placeholder: navigation.navigate('Dashboard');
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Questionnaire Intelligent</Text>
      
      <Text>Objectif principal (physique / lifestyle / social / luxe)</Text>
      <TextInput
        value={answers.objectif}
        onChangeText={(text) => updateAnswer('objectif', text)}
        placeholder="Entrez votre objectif"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Mood actuel (soft / baddie / street / luxe / afro aesthetic…)</Text>
      <TextInput
        value={answers.mood}
        onChangeText={(text) => updateAnswer('mood', text)}
        placeholder="Entrez votre mood"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Image désirée (inaccessible / douce / riche / naturelle…)</Text>
      <TextInput
        value={answers.imageDesiree}
        onChangeText={(text) => updateAnswer('imageDesiree', text)}
        placeholder="Entrez votre image désirée"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Problème principal (corps / peau / style / confiance)</Text>
      <TextInput
        value={answers.probleme}
        onChangeText={(text) => updateAnswer('probleme', text)}
        placeholder="Entrez votre problème principal"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Budget glow up</Text>
      <TextInput
        value={answers.budget}
        onChangeText={(text) => updateAnswer('budget', text)}
        placeholder="Entrez votre budget"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Niveau de discipline (1-10)</Text>
      <TextInput
        value={answers.discipline}
        onChangeText={(text) => updateAnswer('discipline', text)}
        placeholder="Entrez votre niveau"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Inspirations (texte + images via Pinterest)</Text>
      <TextInput
        value={answers.inspirations}
        onChangeText={(text) => updateAnswer('inspirations', text)}
        placeholder="Entrez vos inspirations"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Lifestyle actuel</Text>
      <TextInput
        value={answers.lifestyle}
        onChangeText={(text) => updateAnswer('lifestyle', text)}
        placeholder="Entrez votre lifestyle"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Temps disponible par jour (minutes)</Text>
      <TextInput
        value={answers.temps}
        onChangeText={(text) => updateAnswer('temps', text)}
        placeholder="Entrez le temps"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Text>Deadline transformation</Text>
      <TextInput
        value={answers.deadline}
        onChangeText={(text) => updateAnswer('deadline', text)}
        placeholder="Entrez la deadline"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      
      <Button title="Soumettre" onPress={submit} />
    </ScrollView>
  );
};

export default QuestionnaireScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  // Placeholder for timeline, objectifs, evolution

  useEffect(() => {
    // Charger données utilisateur depuis backend ou storage
    // setScore, setLevel
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Dashboard Glow Up</Text>
      <Text>Score Glow Up: {score}%</Text>
      <Text>Niveau: Lv{level}</Text>
      <Text>Timeline: [Placeholder]</Text>
      <Text>Objectifs en cours: [Placeholder]</Text>
      <Text>Evolution visuelle: [Placeholder]</Text>
      
      <Button title="Module Style" onPress={() => navigation.navigate('StyleModule')} />
      <Button title="Routines" onPress={() => navigation.navigate('Routines')} />
      <Button title="Missions Quotidiennes" onPress={() => navigation.navigate('DailyMissions')} />
      <Button title="Chat IA" onPress={() => navigation.navigate('ChatAI')} />
    </View>
  );
};

export default DashboardScreen;
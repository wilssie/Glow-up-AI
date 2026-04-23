import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const DailyMissionsScreen = ({ navigation }) => {
  const [missions, setMissions] = useState([
    { id: 1, title: '10 min abdos', completed: false },
    { id: 2, title: 'Bois 2L d’eau', completed: false },
    { id: 3, title: 'Valide ta tenue', completed: false },
    { id: 4, title: 'Self care night', completed: false }
  ]);

  const toggleMission = (id) => {
    setMissions(missions.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Missions Quotidiennes</Text>
      <FlatList
        data={missions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{item.title}</Text>
            <Button title={item.completed ? 'Annuler' : 'Compléter'} onPress={() => toggleMission(item.id)} />
          </View>
        )}
      />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DailyMissionsScreen;
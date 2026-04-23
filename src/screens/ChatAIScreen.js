import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ChatAIScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Salut ! Prêt pour ton glow up ?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');
    // Ici, envoyer à IA et recevoir réponse
    // Placeholder: setTimeout(() => setMessages([...messages, newMessage, { id: messages.length + 2, text: 'Réponse IA', sender: 'ai' }]), 1000);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Chat IA</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
            {item.text}
          </Text>
        )}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Tape ton message..."
          style={{ flex: 1, borderWidth: 1, padding: 10 }}
        />
        <Button title="Envoyer" onPress={sendMessage} />
      </View>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ChatAIScreen;
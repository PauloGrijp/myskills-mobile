import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
  }, []);

  function handleAddNewSkills() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkills,
    }
    setMySkills([...mySkills, data]);
    setNewSkills('');
  }

  function handleDeleteSkill(id: string) {
    console.log(id)
    const deleteSkill = mySkills.filter(skill => skill.id !== id);
    setMySkills(deleteSkill);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gretting}, Paulo</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#999"
        value={newSkills}
        onChangeText={setNewSkills}
      />
      <Button onPress={handleAddNewSkills} title="Add"/>
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard skill={item.name} onPress={() => handleDeleteSkill(item.id)}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
});

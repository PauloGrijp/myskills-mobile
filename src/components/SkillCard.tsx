import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  skill: string,
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    marginBottom: 15,
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
  },
});

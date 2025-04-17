import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.profile}>
        <Ionicons name="person-circle-outline" size={60} color="#fff" />
        <Text style={styles.name}>Student App</Text>
        <Text style={styles.email}>studentapp@gmail.com</Text>
      </View>

      <ScrollView style={styles.links}>
        <DrawerLink label="Home" icon="apps" onPress={() => props.navigation.navigate('Home')} />
        <DrawerLink label="Profile" icon="person" onPress={() => props.navigation.navigate('Profile')} />
        <DrawerLink label="Messages" icon="mail" onPress={() => props.navigation.navigate('Messages')} />
        <DrawerLink label="Exam Results" icon="school" onPress={() => props.navigation.navigate('Exam Results')} />
        <DrawerLink label="Attendance" icon="calendar-check" onPress={() => props.navigation.navigate('Attendance')} />
      </ScrollView>
    </DrawerContentScrollView>
  );
}

function DrawerLink({ label, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <MaterialCommunityIcons name={icon} size={20} color="#334155" />
      <Text style={styles.linkLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f9fafb' },
  profile: {
    backgroundColor: '#7c3aed',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomRightRadius: 30,
  },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 8 },
  email: { color: '#ddd', fontSize: 14 },
  links: { padding: 20 },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  linkLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="account-circle-outline" size={60} color="#fff" />
        <Text style={styles.name}>Student App</Text>
        <Text style={styles.email}>studentapp@gmail.com</Text>
      </View>

      <DrawerLink label="Home" icon="apps" onPress={() => props.navigation.navigate('Home')} />
      <DrawerLink label="Profile" icon="account" onPress={() => props.navigation.navigate('Profile')} />
      <DrawerLink label="Messages" icon="email-outline" onPress={() => props.navigation.navigate('Messages')} />
      <DrawerLink label="Exam Results" icon="school-outline" onPress={() => props.navigation.navigate('ExamResults')} />
      <DrawerLink label="Attendance" icon="calendar-check" onPress={() => props.navigation.navigate('Attendance')} />
      <DrawerLink label="Holiday List" icon="party-popper" onPress={() => props.navigation.navigate('HolidayList')} />
    </DrawerContentScrollView>
  );
}

function DrawerLink({ label, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <MaterialCommunityIcons name={icon} size={22} color="#334155" />
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
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  linkLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
});

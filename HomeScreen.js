import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#28a745" />

      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="map" size={40} color="#FFF" />
        </View>
        <Text style={styles.title}>GeoPoll</Text>
        <Text style={styles.subtitle}>Harita Mühendisliği</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PollutionMap')}
        >
          <View style={styles.buttonIconContainer}>
            <Ionicons name="map-outline" size={28} color="#FFF" />
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Kirlilik Haritası</Text>
            <Text style={styles.buttonSubtitle}>Hava kalitesi ve otel bilgileri</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#FFF" style={styles.buttonArrow} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Chatbot')}
        >
          <View style={styles.buttonIconContainer}>
            <Ionicons name="chatbubble-ellipses" size={28} color="#FFF" />
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>GeoBot</Text>
            <Text style={styles.buttonSubtitle}>Konum ve hava durumu asistanı</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#FFF" style={styles.buttonArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#28a745',
    alignItems: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSubtitle: {
    color: '#FFF',
    opacity: 0.8,
    fontSize: 13,
    marginTop: 2,
  },
  buttonArrow: {
    marginLeft: 10,
  },
});

export default HomeScreen;

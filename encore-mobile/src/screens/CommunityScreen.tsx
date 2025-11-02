import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityScreen() {
  const communities = [
    { name: 'Electronic Music', members: '12.5K', color: '#3b82f6' },
    { name: 'Indie Artists', members: '8.2K', color: '#f59e0b' },
    { name: 'Hip Hop Culture', members: '15.7K', color: '#ef4444' },
    { name: 'Jazz Lovers', members: '5.3K', color: '#8b5cf6' },
    { name: 'Rock & Metal', members: '9.8K', color: '#f97316' },
  ];

  const events = [
    { title: 'Live Music Night', time: 'Tonight 8PM', location: 'Virtual Stage' },
    { title: 'Producer Meetup', time: 'Tomorrow 6PM', location: 'Studio A' },
    { title: 'Open Mic Session', time: 'Friday 7PM', location: 'Community Hall' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.content}>
        {/* Featured Communities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Communities</Text>
          {communities.map((community, index) => (
            <TouchableOpacity key={index} style={styles.communityItem}>
              <LinearGradient
                colors={[community.color, `${community.color}80`]}
                style={styles.communityIcon}
              >
                <Ionicons name="people" size={24} color="#fff" />
              </LinearGradient>
              <View style={styles.communityInfo}>
                <Text style={styles.communityName}>{community.name}</Text>
                <Text style={styles.communityMembers}>{community.members} members</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {events.map((event, index) => (
            <TouchableOpacity key={index} style={styles.eventItem}>
              <View style={styles.eventIcon}>
                <Ionicons name="calendar" size={20} color="#10b981" />
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDetails}>{event.time} • {event.location}</Text>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Discover More */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover More</Text>
          <TouchableOpacity style={styles.discoverItem}>
            <View style={styles.discoverIcon}>
              <Ionicons name="search" size={24} color="#10b981" />
            </View>
            <View style={styles.discoverInfo}>
              <Text style={styles.discoverTitle}>Find Communities</Text>
              <Text style={styles.discoverSubtitle}>Explore music communities near you</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.discoverItem}>
            <View style={styles.discoverIcon}>
              <Ionicons name="add-circle" size={24} color="#10b981" />
            </View>
            <View style={styles.discoverInfo}>
              <Text style={styles.discoverTitle}>Create Community</Text>
              <Text style={styles.discoverSubtitle}>Start your own music community</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 16,
  },
  communityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  communityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  communityInfo: {
    flex: 1,
    marginLeft: 12,
  },
  communityName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  communityMembers: {
    color: '#666',
    fontSize: 14,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  eventIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#01302e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfo: {
    flex: 1,
    marginLeft: 12,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventDetails: {
    color: '#666',
    fontSize: 14,
  },
  joinButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  discoverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  discoverIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#01302e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverInfo: {
    flex: 1,
    marginLeft: 12,
  },
  discoverTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  discoverSubtitle: {
    color: '#666',
    fontSize: 14,
  },
});
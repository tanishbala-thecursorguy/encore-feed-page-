import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingHashtags = [
    '#music', '#live', '#concert', '#dj', '#artist', '#vibes',
    '#studio', '#production', '#remix', '#cover', '#acoustic'
  ];

  const suggestedUsers = [
    { username: 'music_producer', type: 'artist' },
    { username: 'indie_vibes', type: 'fan' },
    { username: 'electronic_beats', type: 'artist' },
    { username: 'acoustic_soul', type: 'artist' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </SafeAreaView>

      <ScrollView style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search users, hashtags, music..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Trending Hashtags */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Hashtags</Text>
          <View style={styles.hashtagGrid}>
            {trendingHashtags.map((hashtag, index) => (
              <TouchableOpacity key={index} style={styles.hashtagItem}>
                <Text style={styles.hashtagText}>{hashtag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Suggested Users */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested for You</Text>
          {suggestedUsers.map((user, index) => (
            <TouchableOpacity key={index} style={styles.userItem}>
              <LinearGradient
                colors={['#10b981', '#059669']}
                style={styles.userAvatar}
              >
                <Text style={styles.userAvatarText}>
                  {user.username.charAt(0).toUpperCase()}
                </Text>
              </LinearGradient>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>@{user.username}</Text>
                <View style={styles.userBadge}>
                  <Text style={styles.userBadgeText}>{user.type}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <View style={styles.recentItem}>
            <Ionicons name="time-outline" size={20} color="#666" />
            <Text style={styles.recentText}>electronic music</Text>
            <TouchableOpacity style={styles.clearButton}>
              <Ionicons name="close" size={16} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.recentItem}>
            <Ionicons name="time-outline" size={20} color="#666" />
            <Text style={styles.recentText}>@dj_wave</Text>
            <TouchableOpacity style={styles.clearButton}>
              <Ionicons name="close" size={16} color="#666" />
            </TouchableOpacity>
          </View>
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
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
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
  },
  hashtagGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  hashtagItem: {
    backgroundColor: '#01302e',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  hashtagText: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '500',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  userBadge: {
    backgroundColor: '#01302e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  userBadgeText: {
    color: '#10b981',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  followButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  recentText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  clearButton: {
    padding: 4,
  },
});
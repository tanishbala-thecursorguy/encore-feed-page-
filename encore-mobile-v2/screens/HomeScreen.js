import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PostCard from '../components/PostCard';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  const initialPosts = [
    {
      username: "encore_music",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
      description: "Vibe check 🎶✨ Just dropped this new track and the energy is unmatched!",
      hashtags: ["music", "encore", "vibes", "newtrack"],
      userType: "artist",
      postedTime: "2h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      username: "dj_wave",
      imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600&h=600&fit=crop",
      description: "Night at the decks 🔥 The crowd was absolutely electric tonight!",
      hashtags: ["dj", "party", "live", "nightlife"],
      userType: "fan",
      postedTime: "5h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      username: "overflow.std",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
      description: "Studio session vibes ✨ Working on something special...",
      hashtags: ["music", "studio", "production", "beats"],
      userType: "artist",
      postedTime: "1d",
    },
    {
      username: "the_vortex",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
      description: "Live performance tonight! 🎤 Come join us for an unforgettable show",
      hashtags: ["live", "concert", "music", "performance"],
      userType: "fan",
      postedTime: "3h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      username: "synth_master",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      description: "New synthesizer setup! The sounds this thing makes are incredible 🎹",
      hashtags: ["synth", "electronic", "gear", "music"],
      userType: "artist",
      postedTime: "6h",
    },
  ];

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    
    // Simulate loading new posts
    setTimeout(() => {
      const newPost = {
        username: "fresh_beats",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
        description: "Just uploaded a new remix! What do you think? 🎵",
        hashtags: ["remix", "fresh", "beats", "music"],
        userType: "artist",
        postedTime: "now",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      };
      
      setPosts([newPost, ...posts]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView style={styles.header}>
        <LinearGradient
          colors={['rgba(0,0,0,0.95)', 'rgba(0,0,0,0.8)']}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Encore</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="notifications-outline" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>

      {/* Stories/Status Bar */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.addStoryButton}>
            <LinearGradient
              colors={['#10b981', '#059669']}
              style={styles.addStoryCircle}
            >
              <Ionicons name="add" size={24} color="#fff" />
            </LinearGradient>
            <Text style={styles.storyText}>Your Story</Text>
          </TouchableOpacity>
          
          {['Live Now', 'DJ Set', 'Studio', 'Concert'].map((story, index) => (
            <TouchableOpacity key={index} style={styles.storyItem}>
              <LinearGradient
                colors={['#f59e0b', '#d97706']}
                style={styles.storyCircle}
              >
                <Text style={styles.storyInitial}>{story.charAt(0)}</Text>
              </LinearGradient>
              <Text style={styles.storyText}>{story}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Feed */}
      <View style={styles.feedContainer}>
        <ScrollView
          style={styles.feed}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#10b981"
              colors={['#10b981']}
            />
          }
        >
          {posts.map((post, index) => (
            <PostCard key={`${post.username}-${index}`} {...post} />
          ))}
          
          {/* Load more indicator */}
          <View style={styles.loadMoreContainer}>
            <TouchableOpacity style={styles.loadMoreButton}>
              <Text style={styles.loadMoreText}>Load More Posts</Text>
              <Ionicons name="chevron-down" size={16} color="#10b981" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={['#10b981', '#059669']}
          style={styles.fabGradient}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerGradient: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 4,
  },
  storiesContainer: {
    marginTop: 110,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  addStoryButton: {
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 12,
  },
  addStoryCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 12,
  },
  storyCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  storyInitial: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  storyText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  feedContainer: {
    flex: 1,
  },
  feed: {
    flex: 1,
    paddingBottom: 100, // Account for tab bar
  },
  loadMoreContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#111',
    borderRadius: 24,
    gap: 8,
  },
  loadMoreText: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    elevation: 8,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
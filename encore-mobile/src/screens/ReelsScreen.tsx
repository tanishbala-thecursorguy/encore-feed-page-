import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Reels</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Placeholder for video reels */}
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.reelContainer}>
            <View style={styles.reelPlaceholder}>
              <Ionicons name="play-circle" size={80} color="#10b981" />
              <Text style={styles.reelText}>Music Reel #{item}</Text>
            </View>
            
            {/* Reel Actions */}
            <View style={styles.reelActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={28} color="#fff" />
                <Text style={styles.actionCount}>1.2K</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={28} color="#fff" />
                <Text style={styles.actionCount}>89</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={28} color="#fff" />
                <Text style={styles.actionCount}>Share</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="bookmark-outline" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
            
            {/* Reel Info */}
            <View style={styles.reelInfo}>
              <Text style={styles.reelUsername}>@music_creator_{item}</Text>
              <Text style={styles.reelDescription}>
                Amazing live performance! 🎵 #music #live #performance
              </Text>
            </View>
          </View>
        ))}
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
  cameraButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  reelContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 16,
  },
  reelPlaceholder: {
    width: width,
    height: 500,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelText: {
    color: '#666',
    fontSize: 16,
    marginTop: 12,
  },
  reelActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 24,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionCount: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  reelInfo: {
    paddingHorizontal: 16,
  },
  reelUsername: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  reelDescription: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
});
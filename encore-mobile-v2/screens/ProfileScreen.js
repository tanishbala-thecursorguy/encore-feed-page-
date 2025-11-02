import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  Share,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ onNavigate }) {
  const [following, setFollowing] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});

  useEffect(() => {
    loadUserProfile();
    loadUserPosts();
  }, []);

  const loadUserProfile = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const profile = {
        id: 'current_user',
        username: 'your_username',
        displayName: 'Your Display Name',
        bio: '🎵 Music lover • Artist • Dreamer ✨\nSharing my musical journey with the world',
        avatarColor: ['#10b981', '#059669'],
        followers: 1247,
        following: 892,
        posts: 156,
        verified: true
      };
      setUserProfile(profile);
      setEditedProfile(profile);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserPosts = async () => {
    try {
      // Simulate loading user's posts
      await new Promise(resolve => setTimeout(resolve, 300));
      setUserPosts([
        { id: 1, type: 'audio', title: 'My Latest Track', likes: 234 },
        { id: 2, type: 'video', title: 'Studio Session', likes: 189 },
        { id: 3, type: 'image', title: 'Concert Vibes', likes: 456 },
      ]);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  const handleEditProfile = () => {
    setEditModalVisible(true);
  };

  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      // Simulate API call to save profile
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserProfile(editedProfile);
      setEditModalVisible(false);
      Alert.alert('✅ Success', 'Profile updated successfully!');
    } catch (error) {
      Alert.alert('❌ Error', 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${userProfile?.displayName}'s profile on Encore! 🎵`,
        url: `https://encore.app/profile/${userProfile?.username}`,
      });
    } catch (error) {
      console.error('Error sharing profile:', error);
    }
  };

  const handleSettings = () => {
    if (onNavigate) {
      onNavigate('Settings');
    } else {
      Alert.alert('⚙️ Settings', 'Settings functionality available in full app!');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <LinearGradient
            colors={userProfile?.avatarColor || ['#10b981', '#059669']}
            style={styles.avatar}
          >
            <Text style={styles.avatarText}>
              {userProfile?.displayName?.charAt(0)?.toUpperCase() || 'U'}
            </Text>
            {userProfile?.verified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark-circle" size={20} color="#fff" />
              </View>
            )}
          </LinearGradient>
          
          <Text style={styles.username}>@{userProfile?.username || 'username'}</Text>
          <Text style={styles.displayName}>{userProfile?.displayName || 'Display Name'}</Text>
          <Text style={styles.bio}>{userProfile?.bio || 'No bio yet'}</Text>
          
          <View style={styles.stats}>
            <TouchableOpacity style={styles.stat}>
              <Text style={styles.statNumber}>{userProfile?.posts || 0}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stat}>
              <Text style={styles.statNumber}>{userProfile?.followers || 0}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stat}>
              <Text style={styles.statNumber}>{userProfile?.following || 0}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Ionicons name="share-outline" size={20} color="#10b981" />
          </TouchableOpacity>
        </View>

        {/* Music Stats */}
        <View style={styles.musicStats}>
          <Text style={styles.sectionTitle}>🎵 Music Stats</Text>
          <View style={styles.musicStatsGrid}>
            <View style={styles.musicStatItem}>
              <Ionicons name="musical-notes" size={24} color="#10b981" />
              <Text style={styles.musicStatNumber}>47</Text>
              <Text style={styles.musicStatLabel}>Tracks Shared</Text>
            </View>
            <View style={styles.musicStatItem}>
              <Ionicons name="heart" size={24} color="#ef4444" />
              <Text style={styles.musicStatNumber}>2.3M</Text>
              <Text style={styles.musicStatLabel}>Total Likes</Text>
            </View>
            <View style={styles.musicStatItem}>
              <Ionicons name="play" size={24} color="#3b82f6" />
              <Text style={styles.musicStatNumber}>890K</Text>
              <Text style={styles.musicStatLabel}>Plays</Text>
            </View>
            <View style={styles.musicStatItem}>
              <Ionicons name="people" size={24} color="#f59e0b" />
              <Text style={styles.musicStatNumber}>156</Text>
              <Text style={styles.musicStatLabel}>Collaborations</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📈 Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <Ionicons name="heart" size={16} color="#ef4444" />
              <Text style={styles.activityText}>Liked 23 posts this week</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="musical-notes" size={16} color="#10b981" />
              <Text style={styles.activityText}>Shared 3 new tracks</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="people" size={16} color="#3b82f6" />
              <Text style={styles.activityText}>Joined 2 communities</Text>
            </View>
          </View>
        </View>

        {/* Posts Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📸 Your Posts</Text>
          <View style={styles.postsGrid}>
            <View style={styles.gridRow}>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#10b981', '#059669']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="musical-notes" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#3b82f6', '#2563eb']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="mic" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#f59e0b', '#d97706']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="radio" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.gridRow}>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#ef4444', '#dc2626']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="headset" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#8b5cf6', '#7c3aed']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="piano" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <LinearGradient
                  colors={['#06b6d4', '#0891b2']}
                  style={styles.gridItemGradient}
                >
                  <Ionicons name="library" size={32} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <SafeAreaView style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setEditModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TouchableOpacity onPress={handleSaveProfile} disabled={loading}>
              <Text style={[styles.modalSave, loading && styles.modalSaveDisabled]}>
                {loading ? 'Saving...' : 'Save'}
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

          <ScrollView style={styles.modalContent}>
            <View style={styles.editSection}>
              <Text style={styles.editLabel}>Display Name</Text>
              <TextInput
                style={styles.editInput}
                value={editedProfile.displayName}
                onChangeText={(text) => setEditedProfile({...editedProfile, displayName: text})}
                placeholder="Enter display name"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.editSection}>
              <Text style={styles.editLabel}>Username</Text>
              <TextInput
                style={styles.editInput}
                value={editedProfile.username}
                onChangeText={(text) => setEditedProfile({...editedProfile, username: text})}
                placeholder="Enter username"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.editSection}>
              <Text style={styles.editLabel}>Bio</Text>
              <TextInput
                style={[styles.editInput, styles.editTextArea]}
                value={editedProfile.bio}
                onChangeText={(text) => setEditedProfile({...editedProfile, bio: text})}
                placeholder="Tell us about yourself..."
                placeholderTextColor="#666"
                multiline
                numberOfLines={4}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  username: {
    color: '#10b981',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  displayName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 32,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: 32,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#10b981',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  musicStats: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  musicStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  musicStatItem: {
    width: '47%',
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  musicStatNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  musicStatLabel: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  activityText: {
    color: '#fff',
    fontSize: 14,
  },
  postsGrid: {
    gap: 2,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 2,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridItemGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#10b981',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalCancel: {
    color: '#666',
    fontSize: 16,
  },
  modalSave: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '600',
  },
  modalSaveDisabled: {
    color: '#666',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  editSection: {
    marginVertical: 16,
  },
  editLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  editInput: {
    backgroundColor: '#111',
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  editTextArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
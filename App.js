import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const emailData = [
  {
    id: '1',
    sender: 'LinkedIn Job Alerts',
    subject: '"software engineer": Paper.id - QA Engineer Intern',
    snippet: 'Paper.id QA Engineer Intern: What You\'ll Do: Ident...',
    time: '11:20 AM',
    avatar: 'https://via.placeholder.com/40?text=L',
    attachment: false, // tandain apakah ada attachment atau tidak
  },
  {
    id: '2',
    sender: 'info@umn.ac.id',
    subject: '[HAH HARI INI CLOSE RECRUITMENT RENCANA]',
    snippet: 'HAH RENCANG HARI INI MAU CLOSE RECRUITMENT...',
    time: '11:03 AM',
    avatar: 'https://via.placeholder.com/40?text=I', 
    attachment: true, // Ada attachment di email ini
  },
  {
    id: '3',
    sender: 'Unity',
    subject: 'Time Ghost - How Unity 6 made it possible',
    snippet: 'Unite 2024: Dive into a Unity Originals..',
    time: '11:03 AM',
    avatar: 'https://via.placeholder.com/40?text=U', 
    attachment: false, 
  },
  {
    id: '4',
    sender: 'Unity',
    subject: 'Time Ghost - How Unity 6 made it possible',
    snippet: 'Unite 2024: Dive into a Unity Originals..',
    time: '11:03 AM',
    avatar: 'https://via.placeholder.com/40?text=U', 
    attachment: false, 
  },
  {
    id: '5',
    sender: 'Unity',
    subject: 'Time Ghost - How Unity 6 made it possible',
    snippet: 'Unite 2024: Dive into a Unity Originals..',
    time: '11:03 AM',
    avatar: 'https://via.placeholder.com/40?text=U', 
    attachment: false,
  },
  {
    id: '6',
    sender: 'LinkedIn Job Alerts',
    subject: '"software engineer": Paper.id - QA Engineer Intern',
    snippet: 'Paper.id QA Engineer Intern: What You\'ll Do: Ident...',
    time: '11:20 AM',
    avatar: 'https://via.placeholder.com/40?text=L',
    attachment: false, 
  },
];

// Komponen untuk tampilkan setiap pesan email
function EmailItem({ sender, subject, snippet, time, avatar, attachment }) {
  return (
    <TouchableOpacity style={styles.emailItem}>
      <View style={styles.leftContainer}>
        {/* Gambar profil pengirim */}
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.emailSender}>{sender}</Text>
        <Text style={styles.emailSubject}>{subject}</Text>
        <Text style={styles.emailSnippet}>{snippet}</Text>
        {/* Jika ada attachment, tampilkan ikon file */}
        {attachment && (
          <View style={styles.attachmentContainer}>
            <Ionicons name="document" size={16} color="red" />
            <Text style={styles.attachmentText}>QR_OPREC_RENC...</Text>
          </View>
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.emailTime}>{time}</Text>
        <Ionicons name="star-outline" size={20} color="#999" style={{ marginTop: 5 }} />
      </View>
    </TouchableOpacity>
  );
}

// Komponen untuk All Inboxes
function AllInboxes() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <Text style={{marginLeft: 10}}>All Inboxes</Text>
      <FlatList
        data={emailData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EmailItem
            sender={item.sender}
            subject={item.subject}
            snippet={item.snippet}
            time={item.time}
            avatar={item.avatar}
            attachment={item.attachment}
          />
        )}
      />
    </View>
  );
}

// Komponen untuk Primary
function Primary() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Primary Screen</Text>
    </View>
  );
}

function Social() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Social Screen</Text>
    </View>
  );
}

function Promotions() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Promotions Screen</Text>
    </View>
  );
}

function Starred() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Starred Screen</Text>
    </View>
  );
}

function Snoozed() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Snoozed Screen</Text>
    </View>
  );
}

function Important() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Important Screen</Text>
    </View>
  );
}

function Sent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sent Screen</Text>
    </View>
  );
}

function Scheduled() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scheduled Screen</Text>
    </View>
  );
}

// Komponen untuk ChatScreen
function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
}

// Komponen untuk VideoConferenceScreen
function VideoConferenceScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

// Stack Navigator untuk HomeScreen dengan header custom
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              margin: 28,
              borderRadius: 15,
              backgroundColor: 'white', 
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <View
                    style={{
                      padding: 8, 
                      borderRadius: 15,
                      backgroundColor: 'white',
                    }}
                  >
                    <Ionicons name="menu" size={24} />
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    marginLeft: 10, 
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Search in mail</Text>
                </View>
              </View>

            {/* Gambar Profil */}
            <TouchableOpacity onPress={() => console.log('Profile pressed')}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20, 
                  backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: 'https://via.placeholder.com/40' }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name="AllInboxes" component={AllInboxes} />
    </Stack.Navigator>
  );
}

const FloatingButton = () => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => console.log('Compose button pressed')}
    >
      <Ionicons name="create" size={24} color="red" />
      <Text style={styles.floatingButtonText}>Compose</Text>
    </TouchableOpacity>
  );
};

// Bottom Tab Navigator
function BottomTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Email') {
              iconName = focused ? 'mail' : 'mail-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'VideoConference') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Email" component={HomeStack} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="VideoConference" component={VideoConferenceScreen} />
      </Tab.Navigator>
      <FloatingButton />
    </View>
  );
}

// Komponen custom untuk Drawer
function CustomDrawerLabel({ label, iconName, hasDivider }) {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
        <Ionicons name={iconName} size={24} style={{ marginRight: 10 }} />
        <Text>{label}</Text>
      </View>
      {hasDivider && (
        <View
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginVertical: 5,
          }}
        />
      )}
    </>
  );
}

// Fungsi utama aplikasi dengan Drawer yang membungkus BottomTabs
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomeStack"
          component={BottomTabs}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="All Inboxes" iconName="albums" hasDivider={true} />
          }}
        />
        <Drawer.Screen
          name="Primary"
          component={Primary}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Primary" iconName="mail" /> 
          }}
        />
        <Drawer.Screen
          name="Social"
          component={Social}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Social" iconName="people" /> 
          }}
        />
        <Drawer.Screen
          name="Promotions"
          component={Promotions}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Promotions" iconName="pricetag" hasDivider={true} /> 
          }}
        />
        <Drawer.Screen
          name="Starred"
          component={Starred}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Starred" iconName="star" /> 
          }}
        />
        <Drawer.Screen
          name="Snoozed"
          component={Snoozed}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Snoozed" iconName="time" /> 
          }}
        />
        <Drawer.Screen
          name="Important"
          component={Important}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Important" iconName="bookmark" /> 
          }}
        />
        <Drawer.Screen
          name="Sent"
          component={Sent}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Sent" iconName="send" /> 
          }}
        />
          <Drawer.Screen
          name="Scheduled"
          component={Scheduled}
          options={{ 
            drawerLabel: () => <CustomDrawerLabel label="Scheduled" iconName="stopwatch" /> 
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
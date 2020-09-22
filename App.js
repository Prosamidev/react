import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StreamChat } from "stream-chat"
import {
   chat,
   Channel,
   MessageList,
   MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3VtbWVyLWJpcmQtNCJ9.k8s1Q7plQNXjpXPqilLiJoz92mf6v9cUmNv_ZfOLIMI';

const user = {
  id: 'summer-bird-4',
  name: 'Summer bird',
  image:
    'https://getstream.io/random_png/?id=summer-bird-4&amp;name=Summer+bird',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "summer-bird-4");
    channel.watch();

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}


export default class App extends React.Component {
  render() {
    return <ChannelScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		padding: 30
	},
});

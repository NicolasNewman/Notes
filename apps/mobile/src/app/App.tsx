import React, { useEffect } from 'react';
import { SafeAreaView, Platform, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import nodejs from 'nodejs-mobile-react-native';

export const App = () => {
  useEffect(() => {
    nodejs.start('main.js');
    nodejs.channel.addListener(
      "message",
      (msg) => {
        alert("From node: " + msg);
      },
      this
    );
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* URI points to hosted server instance (i.e., https://example.com) */}
      <Button title="Message Node"
      onPress={() => nodejs.channel.send('A message!')}
      />
      <WebView source={{ uri: 'https://docs.nicolasnewman.com' }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* URI points to hosted server instance (i.e., https://example.com) */}
      <WebView source={{ uri: 'localhost:8080' }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

export default App;

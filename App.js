import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Loading Indicator */}
      {loading && (
        <ActivityIndicator style={styles.loadingContainer} size="large" color="#3498db" />
      )}

      {/* WebView */}
      <WebView
        source={{
          uri: 'https://www.camco.org.in/',
          headers: { 'user-agent': Constants.platform.android ? 'AndroidWebView' : 'WebView' },
        }}
        style={{ flex: 1 }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to match the default Android top bar color
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background color with transparency
  },
});

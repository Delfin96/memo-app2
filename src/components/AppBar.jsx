import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


export default function AppBar() {
    return (
    <View style={styles.appbar}>
        <View style={styles.appbarInner}>
            <Text style={styles.appbarTitle}>Memo App</Text>
            <Text style={styles.appbarRight}>Log out</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    appbar: {
      width: '100%',
      height: 104,
      backgroundColor: '#EA9ACA',
      justifyContent: 'flex-end',
    },
    appbarInner: {
      alignItems: 'center',
    },
    appbarRight: {
      position: 'absolute',
      right: 19,
      bottom: 12,
      color: 'rgba(255,255,255,0.8)',
    },
    appbarTitle: {
      marginBottom: 8,
      fontsize: 22,
      lineHeight: 32,
      color: '#ffffff',
      fontweight: 'bold',
    },
});

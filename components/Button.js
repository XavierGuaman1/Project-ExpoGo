import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  const primaryStyles = theme === "primary" && {
    container: { borderWidth: 4, borderColor: "yellow", borderRadius: 18, marginHorizontal: 20 },
    button: { backgroundColor: '#fff' },
    label: { color: "#000000" },
  };

  return (
    <View style={[styles.buttonContainer, primaryStyles?.container]}>
      <Pressable style={[styles.button, primaryStyles?.button]} onPress={onPress}>
        {theme === "primary" && (
          <FontAwesome name="picture-o" size={18} color="#000000" style={styles.buttonIcon} />
        )}
        <Text style={[styles.buttonLabel, primaryStyles?.label]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 11,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

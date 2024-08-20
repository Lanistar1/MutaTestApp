import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from "./colors"; // Assuming you have a colors file

const CustomInput = ({ label, value, onChangeText, placeholder, secureTextEntry, onToggleSecure }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, isFocused || value ? styles.activeLabel : {}]}>
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isFocused ? styles.activeInput : {}]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChangeText={onChangeText}
          placeholder={isFocused ? '' : placeholder}
          secureTextEntry={secureTextEntry}
        />
        {secureTextEntry !== undefined ? (
          <TouchableOpacity onPress={onToggleSecure} style={styles.icon}>
            <Ionicons
              name={secureTextEntry ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        ) : (
          value && (
            <TouchableOpacity onPress={() => onChangeText('')}>
              <Ionicons name="close-circle" size={24} color="gray" />
            </TouchableOpacity>
          )
        )}
      </View>
      <View
        style={[styles.underline, isFocused ? styles.activeUnderline : {}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    top: 18,
    left: 0,
    bottom: 5,
    fontSize: 16,
    color: '#C6CFE5',
    zIndex: 1,
  },
  activeLabel: {
    top: 0,
    fontSize: 12,
    color: "#BBECED",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingTop: 20,
    paddingHorizontal: 0,
    color: "#ffffff",
  },
  activeInput: {
    color: "#ffffff",
  },
  underline: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 0,
  },
  activeUnderline: {
    backgroundColor: "#4CA6A8",
  },
  icon: {
    marginLeft: 10,
  },
});

export default CustomInput;

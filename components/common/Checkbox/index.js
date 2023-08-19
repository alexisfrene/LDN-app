import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckBoxToggle = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkBoxContainer}
        onPress={handleCheckBoxToggle}
      >
        <View style={styles.checkBox}>
          {checked && <View style={styles.innerCheckBox} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCheckBox: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: '#000',
  },
});

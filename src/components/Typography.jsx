import React from 'react';
import {Text, Platform, StyleSheet} from 'react-native';
export const Typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};
const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});

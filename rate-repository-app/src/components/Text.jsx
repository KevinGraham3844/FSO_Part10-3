import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorAppHeader: {
    color: theme.colors.appHeaderColor
  },
  colorLanguage: {
    color: theme.colors.languageColor
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textAlignStats: {
    textAlign: theme.textAlign.alignStats
  }
});

const Text = ({ color, textAlign, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'appHeader' && styles.colorAppHeader,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    color === 'language' && styles.colorLanguage,
    textAlign === 'alignStats' && styles.textAlignStats,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
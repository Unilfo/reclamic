import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

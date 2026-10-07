import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { formatCurrency } from './src/utils/formatCurrency';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CI/CD Lab</Text>
      <Text testID="balance">{formatCurrency(123456)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
const naoUsada = 1;

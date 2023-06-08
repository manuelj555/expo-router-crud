import { View, Text, StyleSheet } from 'react-native'
import { useIsDarkMode } from '../../hooks/useIsDarkMode'

export type StaticFieldProps = {
  label: String | JSX.Element,
  value: String,
  asRows?: Boolean,
  strong?: Boolean,
}

export const StaticField = ({ label, value, asRows = false, strong = false }: StaticFieldProps): JSX.Element => {
  const isDark = useIsDarkMode()

  return (
    <View style={[styles.container, /*asRows && { flexDirection: 'column' }*/]}>
      <Text style={[styles.label, strong && { fontWeight: '800' }]}>{label}</Text>
      <Text style={[styles.field, strong && { fontWeight: '500' }]}>{value}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  label: {
    color: '#444',
    fontWeight: '500',
    marginEnd: 5,
  },
  field: {
    color: '#444',
  },
  fieldDark: {
    color: '#dddddd'
  },
})

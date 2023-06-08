import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useIsDarkMode } from '../../../hooks/useIsDarkMode';
import { User } from '../../../hooks/user/useGetUsers';
import { StaticField } from '../../layout/StaticField';
import { useEffect, useRef } from 'react';

type UserItemProps = {
  user: User,
  handleSelect: (user: User) => void,
  isSelected?: boolean,
}

export const UserItem = ({ user, handleSelect, isSelected = false }: UserItemProps): JSX.Element => {
  const isDark = useIsDarkMode()
  const padding = useRef(new Animated.Value(0))

  const bgColor = padding.current.interpolate({
    inputRange: [0, 20],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
  })

  useEffect(() => {
    Animated.timing(padding.current, {
      toValue: isSelected ? 20 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start()
  }, [isSelected, padding])

  console.log(bgColor)

  return (
    <Animated.View style={[
      styles.container,
      isDark && styles.containerDark,
      { paddingVertical: padding.current, backgroundColor: bgColor },
    ]}>
      <TouchableWithoutFeedback onPress={() => handleSelect(user)}>
        <View>
          <StaticField label='Nombre de Usuario' value={user.username} asRows strong />
          <StaticField label='Correo Electrónico' value={user.email} asRows />
          <StaticField label='Nombre' value={user.firstName} />
          <StaticField label='Apellido' value={user.lastName} />
          <StaticField label='Teléfono' value={user.phone} asRows />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 15,
    flexDirection: 'column',
    marginHorizontal: 10,
    borderColor: '#DDDDDD',
    borderWidth: 1,
  },
  containerDark: {
    margin: 5,
    color: '#dddddd'
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
  }
})
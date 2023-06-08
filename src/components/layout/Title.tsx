import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useIsDarkMode } from '../../hooks/useIsDarkMode'

export type TitleProps = {
} & PropsWithChildren

export const Title = ({ children }: TitleProps): JSX.Element => {
  const isDark = useIsDarkMode()

  return (
    <Text style={[
      styles.title,
      isDark && styles.titleDark
    ]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    backgroundColor: 'transparent',
    color: "#222",
    textAlign: 'center',
  },
  titleDark: {
    color: '#dddddd',
  }
})

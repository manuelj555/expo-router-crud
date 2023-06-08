import { View, StyleSheet, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Title } from '../components/layout/Title'
import { screenStyles } from '../styles/screen'
import { TextInput } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamsList } from '../navigation'

type Props = NativeStackScreenProps<AppStackParamsList, 'Create'>

export const UserFormScreen = ({ }: Props): JSX.Element => {

  return (
    <View style={screenStyles.screen}>
      <KeyboardAvoidingView behavior={'padding'}>
        <ScrollView>
          <Title>Crear Usario</Title>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={styles.inputRow}>
                <Text>Nombre</Text>
                <TextInput
                  style={styles.input}
                />
              </View>
              <View style={styles.inputRow}>
                <Text>Apellido</Text>
                <TextInput
                  style={styles.input}
                />
              </View>
              <View style={styles.inputRow}>
                <Text>Nombre de Usuario</Text>
                <TextInput
                  style={styles.input}
                />
              </View>
              <View style={styles.inputRow}>
                <Text>Correo Electrónico</Text>
                <TextInput
                  style={styles.input}
                />
              </View>
              <View style={styles.inputRow}>
                <Text>Teléfono</Text>
                <TextInput
                  style={styles.input}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
  inputRow: {
    margin: 5,
    marginBottom: 10,
  }
})
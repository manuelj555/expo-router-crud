import { useState } from 'react';
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '../components/Icon';
import { Title } from '../components/layout/Title';
import { UserItem } from '../components/user/list/UserItem';
import { User, useGetUsers } from '../hooks/user/useGetUsers';
import { screenStyles } from '../styles/screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamsList } from '../navigation';

type Props = NativeStackScreenProps<AppStackParamsList, 'List'>

export const UserListScreen = ({ navigation }: Props): JSX.Element => {
  const { users } = useGetUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleAddPress = (): void => {
    navigation.navigate('Create')
  }

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
  }

  return (
    <View style={[screenStyles.screen, styles.container]}>
      <Title>Listado de Usuarios</Title>

      <View style={{ margin: 10 }}>
        <TouchableWithoutFeedback onPress={handleAddPress}>
          <Icon name='plus-circle' size={32} />
        </TouchableWithoutFeedback>
      </View>

      <View>
        <FlatList
          data={users}
          renderItem={({ item: user }) => (
            <UserItem user={user} handleSelect={handleSelectUser} isSelected={selectedUser === user} />
          )}
          keyExtractor={(item: User) => String(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

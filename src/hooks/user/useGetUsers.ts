import { useQuery } from "@tanstack/react-query"

const data = [
  {
    "id": 1,
    "firstName": "Manuel",
    "lastName": "Aguirre",
    "username": "manuelj555",
    "email": "programador.manuel@gmail.com",
    "phone": "3115678903"
  },
  {
    "id": 2,
    "firstName": "Andres",
    "lastName": "Aguirre",
    "username": "adnresManuel",
    "email": "andres.aguirre.gomez@gmail.com",
    "phone": "4546546456"
  }
]

export type User = {
  id: Number,
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String
}

export const useGetUsers = () => {
  const { isLoading, data: users = [] } = useQuery(['user', 'list'], () => Promise.resolve(data))

  return {
    isLoading,
    users: users as User[],
  }
}
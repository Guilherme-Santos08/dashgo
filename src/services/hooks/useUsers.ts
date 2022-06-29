import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUserResponse = {
  totalCount: number
  users: User[]
}

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])
  console.log(data.users)
  const users = data.users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return { users, totalCount }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 100 * 60 * 10, // 10 minutos
  })
}

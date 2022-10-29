export type User = {
  id: number
  name: string
  email: string
}

export type ApiUsersResponse = {
  total: number
  result: User[]
}

export enum PostListType {
  FOR_YOU,
  SUBSCRIBING,
  USER_PROFILE
}

export enum PostType {
  FREE,
  SILVER,
  GOLD,
  PLATINUM,
  PAID
}

export type User = {
  user_id: string
  username: string | null
  avatar: string | null
}

export type TTrend = {
  title: string
  subtitle: string
  postsNumber: number
}

export type TPost = {
  user_id: string
  content: string
  likedIds: string[]
  image: string | null
  video: string | null
  type: string
  creatorId: string
  createdAt: string
  updatedAt: string
  comments: string[]
  creator: {
    user_id: string
    name: string
    username: string
    avatar: string | null
  }
}

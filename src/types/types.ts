export type AppStateType = {
  isLoggedIn: boolean;
  user: UserType;
}
export type AppPropsType = {}

export type UserType = {
  _id: number;
  kakaoId: string;
  name: string;
  friends: [string];
}

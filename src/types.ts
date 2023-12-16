export interface LoginState {
  infoUser: {
    access_token?: string;
    email?: string;
    id?: string;
    role?: string;
    phone?: string;
    aud?: string;
  } | null;
}

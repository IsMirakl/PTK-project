export interface TokenRefreshResponse {
  accessToken: string;
}

export interface AuthError {
  message: string;
  status: number;
}
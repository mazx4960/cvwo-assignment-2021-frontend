interface AuthResponse {
  message: string;
  access_token: string;
  user: User;
}

interface UserResponse {
  message: string;
  user: User;
}

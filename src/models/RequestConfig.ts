export default class RequestConfig {
  url: string = "";
  method: string = "";
  headers: any = "";
  body?: {
    email?: string;
    password?: string;
    returnSecureToken?: boolean;
    idToken?: string | null;
  };
}
export interface LogRequest {
  variables: {
    userInput: {
      email?: string;
      password?: string;
      profilePicture?: string;
      firstName?: string;
      lastName?: string;
    };
  };
}
  export interface Login {
    variables: {
      email?: string;
      password?: string;
      token: string;
      expiresIn: string;
    };
  }
  


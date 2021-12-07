export default class RequestConfig {
  url: string = "";
  method: string = "";
  headers: any = "";
  body?: {
    email: string;
    password: string;
    returnSecureToken: boolean;
  };
}

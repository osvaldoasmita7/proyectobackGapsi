export interface ErrorHandled {
  response: {
    status: number;
    message: string;
    ok: false;
  };
  status: boolean;
  options: any;
  message: string;
  name: string;
}

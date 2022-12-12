export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export declare type imageUploadProps = {
  onFileChooseClick: (d: File) => void;
};

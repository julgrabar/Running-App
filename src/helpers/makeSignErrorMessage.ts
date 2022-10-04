interface IErrors {
  [key: string]: string[];
}

export const makeSignErrorMessage = (errors: IErrors) => {
  let message = '';
  for (let err in errors) {
    message = `${message} ${err}: ${errors[err].join(' ')}`;
  }
  return message;
};

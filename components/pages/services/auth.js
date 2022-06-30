export function signIn(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'kflasdmflkmdlsakmkflmaslkmfkldasm',
        user: {
          name: 'Daniel Ribeiro',
          email: 'neto.daniribeiro@gmail.com',
        },
      });
    }, 2000);
  });
}

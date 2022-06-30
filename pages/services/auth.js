export const signIn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            name: 'Thiago',
            email: 'thiagomarinho@rocketseat.com.br',
          },
        });
      }, 2000);
    });
  }
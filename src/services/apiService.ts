import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://6032abeaa223790017acf5a8.mockapi.io',
});


apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response = {} } = error;

    if (response.status >= 500) {
      error.message = response.data.message || 'Erro desconhecido, contate o suporte!';
    } else if (!response.status) {
      error.message = 'Parece que um de nossos serviços está fora do ar.';
    } else {
      error.message = response.data.message;
    }

    return Promise.reject(error);
  },
);

export default apiService;
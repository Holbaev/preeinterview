import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://print.kstu.kg/peerinterview/",
  withCredentials:true,
});

// Используйте один перехватчик для установки заголовков
axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Перехватчик для обработки ошибок аутентификации
axiosApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Проверка на статус ответа 401 Unauthorized
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `https://print.kstu.kg/peerinterview/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("token", response.data.access);
        // Обновите заголовок авторизации с новым токеном
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return axiosApi.request(originalRequest);
      } catch (err) {
        console.log(err);
        // В случае ошибки при обновлении токена, рассмотрите возможность выхода из системы или другие действия
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
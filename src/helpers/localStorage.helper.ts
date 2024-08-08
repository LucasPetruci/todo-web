export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("access_token");
};

export function setTokenToLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, token);
}

export function removeTokenFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

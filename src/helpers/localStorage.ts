export class TokenService {
  getLocalItem(key: string) {
    const itemStr = localStorage.getItem(key);
    let item = null;
    if (itemStr) {
      item = JSON.parse(itemStr);
    }
    return item;
  }
  getLocalRefreshToken() {
    const token = this.getLocalItem('token');
    return token?.refresh;
  }
  getLocalAccessToken() {
    const token = this.getLocalItem('token');
    return token?.access;
  }
  setLocalAccessToken(token: string) {
    const tokens = this.getLocalItem('token');
    localStorage.setItem('token', JSON.stringify({ ...tokens, access: token }));
  }
  setTokens(token: { access: string; refresh: string }) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  clearTokens() {
    localStorage.removeItem('token');
  }
}

export const storage = new TokenService();

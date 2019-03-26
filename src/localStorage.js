const username = 'username';

export const save = (state) => localStorage.setItem(username, JSON.stringify(state));
export const get = () => JSON.parse(localStorage.getItem(username));
export const exist = () => localStorage.getItem(username);
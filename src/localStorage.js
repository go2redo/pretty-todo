const USERNAME = 'USERNAME';

export const save = (state) => localStorage.setItem(USERNAME, JSON.stringify(state));
export const get = () => JSON.parse(localStorage.getItem(USERNAME));
export const exist = () => localStorage.getItem(USERNAME);
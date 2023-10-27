export const getContacts = state => state.contacts;
export const getFilter = state => state.filter.filter;

export const authSelector = (state) => state.profile.token;
export const nameSelector = (state) => state.profile.profile.name;


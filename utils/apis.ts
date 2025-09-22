export const baseUrl = "https://business.pikalogistics.com/api/";

export const apis = {
  auth: {
    login: `${baseUrl}auth/login`,
    register: `${baseUrl}auth/register`,
    refresh: `${baseUrl}refresh-token`,
    forgotPassword: `${baseUrl}forgot-password`,
    businessProfile: `${baseUrl}update-business-profile`,
  },
  users: {
    getProfile: `${baseUrl}users/profile`,
    updateProfile: `${baseUrl}users/update`,
  },
};

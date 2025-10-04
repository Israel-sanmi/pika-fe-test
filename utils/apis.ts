export const baseUrl = "https://business.pikalogistics.com/api/";

export const apis = {
  auth: {
    login: `${baseUrl}auth/login`,
    register: `${baseUrl}auth/register`,
    refresh: `${baseUrl}auth/refresh-token`,
    forgotPassword: `${baseUrl}auth/forgot-password`,
    resetPassword: `${baseUrl}auth/reset-password`,

    businessProfile: `${baseUrl}update-business-profile`,
    uploadMultipleDocs: `${baseUrl}upload-multiple-documents`,

    smsOtp: `${baseUrl}auth/send-sms-otp`,
    emailOtp: `${baseUrl}auth/send-email-otp`,

    verifySmsOtp: `${baseUrl}auth/verify-sms-otp`,
    verifyEmailOtp: `${baseUrl}auth/verify-email-otp`,
  },
  users: {
    getProfile: `${baseUrl}profile`,
    updateProfile: `${baseUrl}users/update`,
  },
  general: {
    dashboard: `${baseUrl}dashboard`,
  },
  delivery: {
    trip: `${baseUrl}trip/details`,
    create: `${baseUrl}delivery/create`,
  },
};

export const baseUrl = "https://business.pikalogistics.com/api/";

export const apis = {
  auth: {
    login: `${baseUrl}auth/login`,
    register: `${baseUrl}auth/register`,
    refresh: `${baseUrl}refresh-token`,
    forgotPassword: `${baseUrl}auth/forgot-password`,
    resetPassword: `${baseUrl}auth/reset-password`,
    businessProfile: `${baseUrl}auth/update-business-profile`,

    smsOtp: `${baseUrl}auth/send-sms-otp`,
    emailOtp: `${baseUrl}auth/send-email-otp`,

    verifySmsOtp: `${baseUrl}auth/verify-sms-otp`,
    verifyEmailOtp: `${baseUrl}auth/verify-email-otp`,
  },
  users: {
    getProfile: `${baseUrl}profile`,
    updateProfile: `${baseUrl}users/update`,
  },
};

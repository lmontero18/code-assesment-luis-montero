const REMEMBER_ME_KEY = "auth_remember_me";
const STORED_EMAIL_KEY = "auth_stored_email";

interface RememberMeData {
  email: string;
  remember: boolean;
}

export const useRememberMe = () => {
  const getStoredData = (): RememberMeData => {
    const remember = localStorage.getItem(REMEMBER_ME_KEY) === "true";
    const email = remember ? localStorage.getItem(STORED_EMAIL_KEY) || "" : "";
    return { email, remember };
  };

  const saveRememberMe = (email: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem(REMEMBER_ME_KEY, "true");
      localStorage.setItem(STORED_EMAIL_KEY, email);
    } else {
      localStorage.removeItem(REMEMBER_ME_KEY);
      localStorage.removeItem(STORED_EMAIL_KEY);
    }
  };

  return {
    getStoredData,
    saveRememberMe,
  };
};

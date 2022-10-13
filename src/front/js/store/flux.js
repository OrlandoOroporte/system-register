const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: localStorage.getItem("token") || "",
      baseUrl:"https://3001-orlandoorop-systemregis-hyy92y4w9ae.ws-us71.gitpod.io",

    },
    actions: {
      userRegister: async (user) => {
        let store = getStore();
        try {
          let response = await fetch(
            `${store.baseUrl}/api/user`,
            {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );
          if (response.ok) {
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },
      login: async (user) => {
        let store = getStore();

        try {
          let response = await fetch(
            `${store.baseUrl}/api/login`,
            {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );
          if (response.ok) {
            let data = await response.json();
            setStore({token: data.token});
            localStorage.setItem("token", data.token)
            return true
          }
          console.log("todo mal ");
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },
      logout: () => {
        localStorage.removeItem("token");

        setStore({ token: "" });
      },
    },
  };
};

export default getState;

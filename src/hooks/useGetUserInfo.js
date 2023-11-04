export const useGetUserInfo = () => {
    const authData = JSON.parse(localStorage.getItem("Auth"));
    if (authData && authData.name && authData.profilePhoto && authData.userID && authData.isAuth) {
        const { name, profilePhoto, userID, isAuth } = authData;
        return { name, profilePhoto, userID, isAuth };
    } else {
        // Handle the case where the data is not present in localStorage or is incomplete
        // For example, you can return default values or throw an error.
        return { name: null, profilePhoto: null, userID: null, isAuth: false };
    }
}
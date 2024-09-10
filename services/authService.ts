
import fetchApi from './index'  

const authService = {
    loginWithPhoneNumber: async (phone_number:number) => {
        const data = await fetchApi({
            url: `/send-otp`,
            method: "post",
            data: {phone_number}
          });

          return data
    },
    
    otpVerification: async (phone_number:number, otp:number) => {
        const data = await fetchApi({
            url: `/verify-otp`,
            method: "post",
            data: {phone_number, otp}
          });

          return data
    },

    getProfileDetails: async () => {
        const data = await fetchApi({
            url: `/get-user-details`,
            method: "get",
          });

        return data
    },

    updateProfileDetails: async(sendingValue:any) => {
        const data = await fetchApi({
            url: `/update-user-details`,
            method: "post",
            data: sendingValue
          });

        return data
    }
}


export default authService
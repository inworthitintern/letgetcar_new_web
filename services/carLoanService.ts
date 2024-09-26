
import fetchApi from './index'  

const carLoanService = {
    createCarLoanEnquiry: async (sendingData) => {
        const data = await fetchApi({
            url: `/user-buycar-loan`,
            method: "post",
            data: sendingData
        });
        return data 
    },
    showBuyCarLoans: async () => {
        const {data} = await fetchApi({
            url: `/user-buycar-loan`,
            method: "get",
        });
        return data
    }
}


export default carLoanService 
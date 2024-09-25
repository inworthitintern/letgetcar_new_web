
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
        
    }
}


export default carLoanService 
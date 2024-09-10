
import fetchApi from './index'  

const rentCarLimousineService = {
    getCars: async (params) => {
        const data = await fetchApi({
            url: `/rentcar/rentcar-model/public`,
            method: "get",
            params
        });
        return data
    },

    

    // getSellCarModels: async (params) => {
    //     const data = await fetchApi({
    //         url: `/sellcars/sellModel/public`,
    //         method: "get",
    //         params,
    //     });
    //     return data
    // },
    
    createRentCarEnquiry: async (sendingData) => {
        const data = await fetchApi({
            url: `/user-rentcar-limousine-booking`,
            method: "post",
            data: sendingData
        });
        return data 
    }
}


export default rentCarLimousineService 

import fetchApi from './index'  

const sellCarServices = {
    getSellCarBrands: async () => {
        const data = await fetchApi({
            url: `/sellcars/sellbrand/public`,
            method: "get",
        });
        return data
    },

    getSellCarModels: async (params) => {
        const data = await fetchApi({
            url: `/sellcars/sellModel/public`,
            method: "get",
            params,
        });
        return data
    },
    
    createSellCarEnquiry: async (sendingData) => {
        const data = await fetchApi({
            url: `/user-booking-enquiry`,
            method: "post",
            data: sendingData
        });
        return data 
    }
}


export default sellCarServices 
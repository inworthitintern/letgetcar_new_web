
import fetchApi from './index'  

const garageBookingService = {
    createGarageBookingEnquiry: async (sendingData) => {
        const data = await fetchApi({
            url: `/user-garbage-booking`,
            method: "post",
            data: sendingData
        });
        return data 
    }
}


export default garageBookingService;
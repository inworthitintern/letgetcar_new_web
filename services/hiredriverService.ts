
import fetchApi from './index'  

const hiredriverService = {
    createHiredriverEnquiry: async (sendingData) => {
        const data = await fetchApi({
            url: `/user-hire-booking`,
            method: "post",
            data: sendingData
        });
        return data 
    }
}


export default hiredriverService 
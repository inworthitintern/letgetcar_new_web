
import fetchApi from './index'  

const policyServices = {
    getPolicies: async () => {
        const {data} = await fetchApi({
            url: `/termsandpolicy/public/1`,
            method: "get",
        });
        return data
    },
}


export default policyServices 
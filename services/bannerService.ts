
import fetchApi from './index'  

const bannerServices = {
    getBanners: async (query = {}) => {
        const {banners} = await fetchApi({
            url: `/banner/public`,
            method: "get",
            params: query || {}
        });
        return banners
    },
    
   

}


export default bannerServices 
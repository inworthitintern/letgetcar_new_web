
import fetchApi from './index'  

const buyCarServices = {
    getBrands: async (query = {}) => {
        const data = await fetchApi({
            url: `/buycars/brands/public`,
            method: "get",
            params: query || {}
        });
        return data
    },
    
    getBodyTypes: async () => {
        const data = await fetchApi({
            url: `/buycars/bodytypes/public`,
            method: "get",
          });
          return data
    },

    getCategories: async () => {
        const data = await fetchApi({
            url: `/buycars/categories/public`,
            method: "get",
          });
          return data
    },

    getBuyCars: async (filters: any) => {
        if(filters.constructor.name === "Object") {
            const data = await fetchApi({
                url: `/buycars/model/public`,
                method: "get",
                params: filters
            });
            return data
        } else {
            const data = await fetchApi({
                url: `/buycars/model/public?${filters}`,
                method: "get",
            });
            return data
        }
    },

    getBuyCarsLoggedInUser: async (filters: any) => {
        if(filters.constructor.name === "Object") {
            const data = await fetchApi({
                url: `/user-buycars-model`,
                method: "get",
                params: filters
            });
            return data
        } else {
            const data = await fetchApi({
                url: `/user-buycars-model?${filters}`,
                method: "get",
            });
            return data
        }
    },

    getBuyCarDetails: async (carSlug: string) => {
        const data = await fetchApi({
            url: `/buycars/model/public/${carSlug}`,
            method: "get",
        });
        return data
    },

    getBuyCarLoggedInUserDetails: async (carSlug: string) => {
        const data = await fetchApi({
            url: `/user-buycars-model/${carSlug}`,
            method: "get",
        });
        return data
    },
    
    getTestDriveBookingSlot: async (carId: number) => {
        const data = await fetchApi({
            url: `/buycars/test_drive_slots/public/${carId}`,
            method: "get",
        });
        return data 
    },

    createTestDriveBook: async (sendingData: any) => {
        const data = await fetchApi({
            url: `/user-buycars-textdrivebooking`,
            method: "post",
            data: sendingData
        });
        return data 
    },
    getFeaturesData: async (carId:number) => {
        const data = await fetchApi({
            url: `/buycars/features/public?car_id=${carId}`,
            method: "get",
        });
        return data 
    }

}


export default buyCarServices 
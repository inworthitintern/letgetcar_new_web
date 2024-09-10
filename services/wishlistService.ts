
import fetchApi from './index'  

const wishlistServices = {
    addToWishlist: async (modelId:number) => {
        const data = await fetchApi({
            url: `/add-model-whishlist`,
            method: "post",
            data: {model_id: modelId}
        });
        return data
    },
    
    getWishlistItems: async () => {
        const data = await fetchApi({
            url: `/add-model-whishlist`,
            method: "get",
          });
          return data
    },

    removeWishlistItem: async (id:number) => {
        const data = await fetchApi({
            url: `/add-model-whishlist/${id}`,
            method: "delete",
          });
          return data
    },

}


export default wishlistServices 
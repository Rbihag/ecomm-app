import axiosInstance from "../../utils/axiosProdConfig";

const getProducts = async () => {
    try {
        const response = await axiosInstance.get("product");
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};

export const productService = {
    getProducts,
};

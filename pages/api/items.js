import { createAxios } from './index';

// Get Item
export const getAllItems = async () => {
    try {
        const response = await createAxios().get(`/api/items`);
        return response.data;
    } catch (error) {
        console.error('Error getting Item:', error);
        throw error;
    }
};
export const getItems = async (itemId) => {
    try {
        const response = await createAxios().get(`/api/items/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Item:', error);
        throw error;
    }
};

// Update Item
export const updateItems = async (itemId, orderData) => {
    try {
        const response = await createAxios().put(`/api/items/${itemId}`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error updating Item:', error);
        throw error;
    }
};

// Delete Item
export const deleteItems = async (itemId) => {
    try {
        const response = await createAxios().delete(`/api/items/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting Item:', error);
        throw error;
    }
};

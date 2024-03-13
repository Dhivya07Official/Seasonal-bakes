import { createAxios } from './index';

// Get Order
export const getAllOrders = async () => {
    try {
        const response = await createAxios().get(`/api/orders`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};
// Get Order by user id
export const getAllOrdersByUserId = async (userId) => {
    try {
        const response = await createAxios().get(`/api/orders/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};
// Get Order
export const getOrders = async (orderId) => {
    try {
        const response = await createAxios().get(`/api/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};

// Update Order
export const createOrders = async (b2cId) => {
    try {
        const response = await createAxios().post(`/api/orders/user/${b2cId}`);
        return response.data;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
};
// Update Order
export const updateOrders = async (orderId, orderData) => {
    try {
        const response = await createAxios().put(`/api/orders/${orderId}`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
};

// Delete Order
export const deleteOrders = async (orderId) => {
    try {
        const response = await createAxios().delete(`/api/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting Order:', error);
        throw error;
    }
};

import axios from 'axios';

// Get Order
export const getAllOrders = async () => {
    try {
        const response = await axios.get(`/api/orders`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};
// Get Order by user id
export const getAllOrdersByUserId = async (userId) => {
    try {
        const response = await axios.get(`/api/orders/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};
// Get Order
export const getOrders = async (orderId) => {
    try {
        const response = await axios.get(`/api/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting Order:', error);
        throw error;
    }
};

// Update Order
export const updateOrders = async (orderId, orderData) => {
    try {
        const response = await axios.put(`/api/orders/${orderId}`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error updating Order:', error);
        throw error;
    }
};

// Delete Order
export const deleteOrders = async (orderId) => {
    try {
        const response = await axios.delete(`/api/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting Order:', error);
        throw error;
    }
};

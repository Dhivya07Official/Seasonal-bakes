import { createAxios, getActivePromotion } from './index';
// Get user
export const getUser = async (userId) => {
    try {
        getActivePromotion()
        const response = await createAxios().get(`/api/users/b2cId/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};

// Create user
export const createUser = async (userData) => {
    try {
        const response = await createAxios().post(`/api/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};
// Update user
export const updateUser = async (userId, userData) => {
    try {
        const response = await createAxios().put(`/api/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Delete user
export const deleteUser = async (userId) => {
    try {
        const response = await createAxios().delete(`/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

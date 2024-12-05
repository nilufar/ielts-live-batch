import axios from "axios";

const BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1/products";

// Fetch course details
export const fetchCourseDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ielts-live-batch`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

// Fetch course variants
export const fetchCourseVariants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ielts-live-batch/variants`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course variants:", error);
    throw error;
  }
};

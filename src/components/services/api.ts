import { ApiResponse } from '../types/data';

const API_URL = '/sample-data.json'; // Path to your mock data

export const fetchData = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

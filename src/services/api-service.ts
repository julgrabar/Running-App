import axios from "axios"

axios.defaults.baseURL = "https://running-app-api.herokuapp.com/api"

export const fetchWeeks = async () => {
    const response = await axios.get("/weeks/")
    return response.data
}

export const fetchTrainings = async (id: string | undefined) => {
    const response = await axios.get(`/week/${id}/`)
    return response.data
}

export const fetchWorkout = async (id: string | undefined) => {
    const  response = await axios.get(`/training/${id}/`)
    return response.data
}
import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://144.202.6.35:80'
// })

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

/// BEGIN EVENT HELPERS ///

export const insertEvent = (payload: object) => api.post(`/events/addEvent`, payload)
export const getAllEvents = () => api.get(`/events/getEvents`)
export const updateEventById = (id: string, payload: object) => api.put(`/events/events/${id}`, payload)
export const deleteEventById = (id: string) => api.delete(`/events/events/${id}`)
export const getEventById = (id: string) => api.get(`/events/events/${id}`)


/// END EVENT HELPERS ///
/// Begin Drink Helpers ///

export const insertDrink = (payload: object) => api.post(`/addDrink`, payload)
export const getAllDrinks = () => api.get(`/getDrinks`)
export const deleteDrinkById = (id: string) => api.delete(`/drinks/${id}`) 
export const updateDrinkById = (id: string, payload: object) => api.put(`/drinks/${id}`, payload) 

/// End Drink Helpers ///

const apis = {
    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,

    // begin api for drinks
    insertDrink,
    getAllDrinks,
    updateDrinkById,
    deleteDrinkById
}

export default apis
import Axios from 'axios';
import { ApiResponse } from './types';

const skyScrapperApi = import.meta.env.VITE_SKY_SCRAPPER_API;
const skyScrapperHost = import.meta.env.VITE_SKY_SCRAPPER_HOST;
const skyScrapperKey = import.meta.env.VITE_SKY_KEY;

const options = (params: any) => {
    return {
        method: 'GET',
        url: `${skyScrapperApi}v2/flights/searchFlights`,
        params: {
            locale: 'en-US',
            market: 'en-US',
            currency: 'USD',
            countryCode: 'US',
            ...params,
        },
        headers: {
            'x-rapidapi-key': skyScrapperKey,
            'x-rapidapi-host': skyScrapperHost
        }
    }
};

export const dataProvider = {
    getList: async (resource: any, params: any): Promise<ApiResponse> => {
        if (resource === 'airports' && params.filter && params.filter.q) {
            const { data } = await Axios.get(`${skyScrapperApi}v1/flights/searchAirport?query=${params.filter.q}&locale=en-US`, {
                headers: {
                    'x-rapidapi-key': skyScrapperKey,
                    'x-rapidapi-host': skyScrapperHost
                }
            });
            const finalResult = data.data.map((el: any) => {
                el.id = new Date();
                return el;
            })
            return {
                data: finalResult,
                total: finalResult.length
            }
        }
        if (resource === 'flights' && params.filter.originEntityId) {
            const { data } = await Axios.request(options(params.filter));
            return {
                data: [{ id: 1, ...data.data }],
                total: 1
            }
        }
        return {
            data: [],
            total: 0
        }
    },
    getMany: async (_: any, params: any): Promise<ApiResponse> => {
        return new Promise((resolve) => {
            resolve({
                data: [{
                    "id": params.ids[0],
                    "entityId": params.ids[0],
                }],
                total: 1
            });
        })
    },
};

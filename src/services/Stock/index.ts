import api from "../../config/api";
import type { StockProductInterface } from "../../models/interfaces/stock-product";

const path = '/v1/stock';

const getStock = async () => {
    const response = await api.get<StockProductInterface>(path).then(res => {return res.data});

    return response;
};

const getStockByDate = async (startDate?: number, endDate?: number) => {
    const startDueDate = new Date();
    const endDueDate = new Date();

    startDueDate.setTime(startDueDate.getTime() + startDate);
    endDueDate.setTime(endDueDate.getTime() + endDate);

    const params = {
        startDueDate: startDueDate.toISOString(),
        endDueDate: endDueDate.toISOString()
    };

    const response = await api.get<StockProductInterface>(path, {params}).then((res) => {
        return res.data;
    });

    return response;
}

export { getStock, getStockByDate }
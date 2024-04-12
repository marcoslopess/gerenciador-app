import React, { createContext, useState, useContext } from "react";
import { api, baseURL } from "../services/config";
import { FinanceData } from "../components/molecules/CardValue";
import { currentMonth } from "../utils/date";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type PropsContextChildren = {
  children: React.ReactNode;
};

export type DataRecords = {
  values?: FinanceData[];
  totalExpenditure?: string;
  totalEntries?: string;
  finalBalance: string;
};

type ApiContextType = {
  records: DataRecords;
  charts: any;
  loading: boolean;
  error: string | null;
  fetchRecords: (month: number) => void;
  fetchRecord: (id: string) => any;
  createRecord: (recordData: any) => void;
  updateRecord: (id: string, recordData: any) => void;
  deleteRecord: (id: number) => void;
  fetchfinancialCharts: (month: number) => void;
};

const ApiContext = createContext<ApiContextType>({
  records: { values: [], totalExpenditure: "", totalEntries: "", finalBalance: "" },
  charts: {},
  loading: false,
  error: null,
  fetchRecords: () => {},
  fetchRecord: () => {
    return {};
  },
  createRecord: () => {},
  updateRecord: () => {},
  deleteRecord: () => {},
  fetchfinancialCharts: () => {},
});

export const ApiProvider: React.FC<PropsContextChildren> = ({ children }) => {
  const [records, setRecords] = useState<DataRecords>({
    values: [],
    totalExpenditure: "",
    totalEntries: "",
    finalBalance: "",
  });
  const [charts, setCharts] = useState<FinanceData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar todos os registros
  const fetchRecords = async (month: number) => {
    setLoading(true);
    try {
      const openingBalance = await AsyncStorage.getItem("openingBalance");
      const response = await api.get(`financial-record/?month=${month}&openingBalance=${openingBalance}`);
      setRecords(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar um registro
  const fetchRecord = async (id: string) => {
    setLoading(true);
    try {
      console.log(id);
      const response = await api.get(`financial-record/${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para criar um novo registro
  const createRecord = async (recordData: any) => {
    setLoading(true);
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: baseURL + "financial-record",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        data: recordData,
      };

      await api.request(config);
      await fetchRecords(currentMonth());
    } catch (error: any) {
      console.log(error.message);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para atualizar um registro existente
  const updateRecord = async (id: string, recordData: FinanceData) => {
    setLoading(true);
    try {
      await api.patch(`financial-record/${id}`, recordData);
      fetchRecords(currentMonth());
    } catch (error: any) {
      console.log(error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir um registro
  const deleteRecord = async (id: number) => {
    setLoading(true);
    try {
      await api.delete(`financial-record/${id}`);
      fetchRecords(currentMonth());
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //CALCULATIONS
  // Função para buscar todos os graficos
  const fetchfinancialCharts = async (month: number) => {
    setLoading(true);
    try {
      const response = await api.get(`calculations/financial-charts/?month=${month}`);
      setCharts(response.data);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        records,
        charts,
        loading,
        error,
        fetchRecords,
        fetchRecord,
        createRecord,
        updateRecord,
        deleteRecord,
        fetchfinancialCharts,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

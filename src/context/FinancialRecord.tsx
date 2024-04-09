import React, { createContext, useState, useContext } from "react";
import { api } from "../services/config";
import { FinanceData } from "../components/molecules/CardValue";
import axios from "axios";

export type PropsContextChildren = {
  children: React.ReactNode;
};

type ApiContextType = {
  records: FinanceData[];
  loading: boolean;
  error: string | null;
  fetchRecords: () => void;
  createRecord: (recordData: any) => void;
  updateRecord: (id: number, recordData: any) => void;
  deleteRecord: (id: number) => void;
};

const ApiContext = createContext<ApiContextType>({
  records: [],
  loading: false,
  error: null,
  fetchRecords: () => {},
  createRecord: () => {},
  updateRecord: () => {},
  deleteRecord: () => {},
});

export const ApiProvider: React.FC<PropsContextChildren> = ({ children }) => {
  const [records, setRecords] = useState<FinanceData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar todos os registros
  const fetchRecords = async () => {
    setLoading(true);
    try {
      const response = await api.get("financial-record");
      console.log(response.data);

      setRecords(response.data);
    } catch (error: any) {
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
        url: "http://191.252.195.43:3000/financial-record",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(recordData),
      };

      await axios.request(config);

      await fetchRecords();
    } catch (error: any) {
      console.log(error.message);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para atualizar um registro existente
  const updateRecord = async (id: number, recordData: FinanceData) => {
    setLoading(true);
    try {
      await api.put(`/financial-record/${id}`, recordData);
      fetchRecords();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir um registro
  const deleteRecord = async (id: number) => {
    setLoading(true);
    try {
      await api.delete(`/financial-record/${id}`);
      fetchRecords();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        records,
        loading,
        error,
        fetchRecords,
        createRecord,
        updateRecord,
        deleteRecord,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

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
  fetchRecord: (id: string) => any;
  createRecord: (recordData: any) => void;
  updateRecord: (id: string, recordData: any) => void;
  deleteRecord: (id: number) => void;
};

const ApiContext = createContext<ApiContextType>({
  records: [],
  loading: false,
  error: null,
  fetchRecords: () => {},
  fetchRecord: () => {
    return {};
  },
  createRecord: () => {},
  updateRecord: () => {},
  deleteRecord: () => {},
});

export const ApiProvider: React.FC<PropsContextChildren> = ({ children }) => {
  const [records, setRecords] = useState<FinanceData[]>([]);
  const [record, setRecord] = useState<FinanceData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar todos os registros
  const fetchRecords = async () => {
    setLoading(true);
    try {
      const response = await api.get("");
      setRecords(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar todos os registros
  const fetchRecord = async (id: string) => {
    setLoading(true);
    try {
      console.log(id);
      const response = await api.get(`/${id}`);
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
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        data: recordData, //JSON.stringify(recordData),
      };
      console.log(config);

      await api.request(config);

      await fetchRecords();
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
      await api.patch(`/${id}`, recordData);
      fetchRecords();
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
      await api.delete(`/${id}`);
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
        fetchRecord,
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

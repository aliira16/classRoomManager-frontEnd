import { DataProvider } from "@refinedev/core";
import { simpleRestDataProvider } from "@refinedev/simple-rest";

export const dataProvider: DataProvider = simpleRestDataProvider("http://localhost:8000/api");

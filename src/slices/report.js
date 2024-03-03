import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import DatabaseService from '../services/DatabaseService'
import ReportService from "../services/ReportService";

const initialState = {
  reportTables: [],
  reportDimTable: [],
  reportRows: [],
  reportCols: [],
  reportFilters: [],
};

// export const connectDB = createAsyncThunk(
//   "database/connect",
//   async (dbInfo) => {
//     const res = await DatabaseService.connectDatabase(dbInfo);
//     return res.data;
//   }
// );

export const getTables = createAsyncThunk("/getTables", async (dbInfo) => {
  const res = await ReportService.getTables(dbInfo);
  return res.data;
});

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setReportTables: (state, action) => {
      state.reportTables = action.payload;
    },

    setReportDimTable: (state, action) => {
      state.reportDimTable = action.payload;
    },

    setReportRows: (state, action) => {
      state.reportRows = action.payload;
    },

    setReportCols: (state, action) => {
      state.reportCols = action.payload;
    },

    setReportFilters: (state, action) => {
      state.reportFilters = action.payload;
    },
  },
  extraReducers: {
    [getTables.fulfilled]: (state, action) => {
      const { data } = action.payload;
      let formattedData = [];
      data.forEach(item => {
        formattedData.push({id:item, content: item})
      }) 
      state.reportTables = formattedData;
      state.reportCols = []
      state.reportRows = []
      state.reportDimTable = []
      state.reportFilters = []
      return state;
    },
  },
});

export const { setReportRows, setReportCols, setReportFilters } =
  reportSlice.actions;
export default reportSlice.reducer;

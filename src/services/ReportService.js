import http from "../config/http-common";

const getTables = (dbInfo) => {
  console.log("report getTables dbInfo", dbInfo);
  return http.post("/getTables", dbInfo);
};

const pivot = (pivotInfo) => {
  console.log(pivotInfo);
  return http.post("/pivot", pivotInfo);
};

const ReportService = {
  pivot,
  getTables,
};

export default ReportService;

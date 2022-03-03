import { createContext, useState, useContext } from "react";
import Axios from "axios";
import { object, string } from "yup";
export const ReportCaseContext = createContext();
// import { baseURL } from "../lib/Api";

const reportSchema = object({
  category: string().required(),
  title: string().required(),
  details: string().required(),
  region: string().required(),
  town: string().required(),
  location: string().required()
});

function ReportCaseContextProvider({ children }) {
  const [report, setReport] = useState({
    category: "",
    title: "",
    details: "",
    region: "",
    town: "",
    location: "",
    reporter: "anonymous"
  });

  const [person, setPerson] = useState({
    anon: true,
    fullname: "",
    email: "",
    phone: ""
  });

  const submitCase = async () => {
    try {
      await reportSchema.validate(report);

      let newCase;

      if (!person.anon) {
        newCase = report;
      } else {
        newCase = { ...report, reporter: { ...person } };
      }

      let res = await Axios({
        method: "POST",
        url: "http://10.5.17.18:80/api/v1/cases/add",
        data: report
      });

      return { status: true, data: res.data };
    } catch (error) {
      if (error.name === "ValidationError") {
        return {
          status: false,
          data: "Please check your inputs and try again"
        };
      }

      console.log("REPORTING CASE ERROR", error);
    }
  };

  const clearForm = () => {
    setReport({
      category: "",
      title: "",
      details: "",
      region: "",
      town: "",
      location: "",
      reporter: "anonymous"
    });

    setPerson({
      anon: true,
      fullname: "",
      email: "",
      phone: ""
    });
  };

  return (
    <ReportCaseContext.Provider
      value={{ report, person, setReport, setPerson, submitCase, clearForm }}
    >
      {children}
    </ReportCaseContext.Provider>
  );
}

function useReportCaseContext() {
  return useContext(ReportCaseContext);
}

export { ReportCaseContextProvider, useReportCaseContext };

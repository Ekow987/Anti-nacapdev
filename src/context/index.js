import ReportCaseContextProvider from "./reportCase.context";

function ContextWrap({ children }) {
  return <ReportCaseContextProvider>{children}</ReportCaseContextProvider>;
}

export default ContextWrap;

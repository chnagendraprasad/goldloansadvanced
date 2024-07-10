import LoanDetails from './LoanDetails';
export default interface CustomerwithLoanDetails {
  CustId: number;
  CustomerCode: string;
  CustomerName: string;
  BranchName: string;
  AadharNo: string;
  MobileNo: string;
  Gender: string;
  DOB: string;
  PresentAddress: string;
  PermanentAddress: string;
  EmailId: string;
  DateOfEnrollment: string;
  Status: string;
  Customer_Photo: string;
  Ticket_Details: LoanDetails[];
}

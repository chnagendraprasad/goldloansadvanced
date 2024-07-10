//import LoanType from './LoanType';
//import Publisher from './Publisher';

export default interface Customer {
    CustId: number;
    CustCode: string;
    CustomerName: string;
  //publishers: Publisher[];
  //description_raw: string;
  //parent_loantypes: { loantype: LoanType }[];
  MobileNumber: string;
  CustomerPhotoBase64String: string;
  MBRI_ID: number;
  TotalLoans: number;
  LoanAmount: string;
  CashAmount: string;
  BankAmount: string;
  ProcessingFee: string;
}

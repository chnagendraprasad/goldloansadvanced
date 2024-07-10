export default interface LoanDetails {
    Ticket_Id: number;
    Customer_Id: number;
    Ticket_No: string;
    Disbursement_Date1: string;
    ROI: string;
    Period: number;
    Vault_No: string;
    Loan_Amount: string;
    OS_Capital: string;
    Redemption_date_Actual1: string;
    MGLTD_CUSTOMER_IMAGE: string;
    MGLTD_ARTICLEIMG: string;
    Doc_Name_App: string;
    Doc_Path_App: string;
    Doc_Name1_Borr: string;
    Doc_Path1_Borr: string;
    CashAmount: string;
    BankAmount: string;
    Processing_Fee: string;
    LoanCompletionDate: string;
    TopUp_Flag: string;
    AutoRenewal: string;
    BankAccountVerificationStatus: string;
    LoanAmountDisbursementStatus: string;
}

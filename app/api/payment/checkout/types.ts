interface Discount {
    value: number;
    limitDate: string | null;
    dueDateLimitDays: number;
    type: string;
  }
  
  interface Fine {
    value: number;
    type: string;
  }
  
  interface Interest {
    value: number;
    type: string;
  }
  
  export interface Payment {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    paymentLink: string | null;
    value: number;
    netValue: number;
    originalValue: number | null;
    interestValue: number | null;
    description: string | null;
    billingType: string;
    pixTransaction: string | null;
    status: string;
    dueDate: string;
    originalDueDate: string;
    paymentDate: string | null;
    clientPaymentDate: string | null;
    installmentNumber: number | null;
    invoiceUrl: string;
    invoiceNumber: string;
    externalReference: string | null;
    deleted: boolean;
    anticipated: boolean;
    anticipable: boolean;
    creditDate: string | null;
    estimatedCreditDate: string | null;
    transactionReceiptUrl: string | null;
    nossoNumero: string | null;
    bankSlipUrl: string | null;
    lastInvoiceViewedDate: string | null;
    lastBankSlipViewedDate: string | null;
    discount: Discount;
    fine: Fine;
    interest: Interest;
    postalService: boolean;
    custody: string | null;
    refunds: string | null;
  }
// ═══════════════════════════════════════════════
// CHART OF ACCOUNTS  (full database)
// ═══════════════════════════════════════════════
const chartOfAccounts = {
    "101001":    { name: "Fixed Assets - Refrigerators",        category: "Asset" },
    "101001001": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001002": { name: "Fixed Assets - Refrigerators 2",      category: "Asset" },
    "101001003": { name: "Fixed Assets - Refrigerators 3",      category: "Asset" },
    "101001004": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001005": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001006": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001007": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001008": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001009": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101001010": { name: "Fixed Assets - Refrigerators 1",      category: "Asset" },
    "101002":    { name: "Fixed Assets - Compressors",          category: "Asset" },
    "101002001": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002002": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002003": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002004": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002005": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002006": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002007": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002008": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002009": { name: "Fixed Assets - Compressor 1",         category: "Asset" },
    "101002010": { name: "Fixed Assets - Compressor 1",         category: "Asset" }, 
    "101003":    { name: "Fixed Assets - Computers & Printers", category: "Asset" },
    "101003001": { name: "Fixed Assets - Laptop",                              category: "Asset" },
    "101003002": { name: "Fixed Assets - Desktop",                             category: "Asset" },
    "101003003": { name: "Fixed Assets - Printer",                              category: "Asset" },
    "101003004": { name: "Fixed Assets - Photocopier",                             category: "Asset" },
    "101003005": { name: "Fixed Assets - taplet",                              category: "Asset" },
    "101003006": { name: "Fixed Assets - Computers & Printers",                             category: "Asset" },
    "101003007": { name: "Fixed Assets - Computers & Printers",                              category: "Asset" },
    "101003008": { name: "Fixed Assets - Computers & Printers",                             category: "Asset" },
    "101003009": { name: "Fixed Assets - Computers & Printers",                              category: "Asset" },
    "1010030010": { name: "DeFixed Assets - Computers & Printerssktop",                             category: "Asset" },
    "101004":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004001":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004002":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004003":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004004":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004005":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004006":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004007":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004008":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004009":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    "101004010":    { name: "Fixed Assets - Packaging Machines",   category: "Asset" },
    
    "101005":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005001":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005002":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005003":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005004":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005005":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005006":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005007":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005008":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005009":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },
    "101005010":    { name: "Fixed Assets - Electronic Scale",     category: "Asset" },

     "102001": { name: "Bank Accounts",                  category: "Asset" },
    "102001001": { name: "Bank Account - CIB - EGP",                  category: "Asset" },
    "102001002": { name: "Bank Account - CIB- USD",                  category: "Asset" },
    "102001003": { name: "Bank Account - CIB- CPS",                  category: "Asset" },
    "102001004": { name: "Bank Account ",                  category: "Asset" },
    "102001005": { name: "Bank Account ",                  category: "Asset" },
    "102001006": { name: "Bank Account ",                  category: "Asset" },
    "102001007": { name: "Bank Account ",                  category: "Asset" },
    "102001008": { name: "Bank Account ",                  category: "Asset" },
    "102001009": { name: "Bank Account ",                  category: "Asset" },
    "1020010010": { name: "Bank Account ",                  category: "Asset" },
    
    "102002":    { name: " CASH ",                                    category: "Asset" },
    "102002001": { name: "Cash on Hand - main -EGP",                  category: "Asset" },
    "102002002": { name: "BCash on Hand - main -USD ",                  category: "Asset" },
    "102002003": { name: "Cash on Hand - main ",                  category: "Asset" },
    "102002004": { name: "Cash on Hand - main  ",                  category: "Asset" },
    "102002005": { name: "Cash on Hand - main  ",                  category: "Asset" },
    "102002006": { name: "Cash on Hand - main  ",                  category: "Asset" },
    "102002007": { name: "Cash on Hand - main  ",                  category: "Asset" },
    "102002008": { name: "Cash on Hand - main ",                  category: "Asset" },
    "102002009": { name: "Cash on Hand - main  ",                  category: "Asset" },
    "102002010": { name: "Cash on Hand - main ",                  category: "Asset" },

    "102003": { name: "Temporary Advance",                  category: "Asset" },
    "102003001": { name: "Temporary Advance",                  category: "Asset" },
    "102003002": { name: "Temporary Advance",                  category: "Asset" },
    "102003003": { name: "Temporary Advance",                  category: "Asset" },
    "102003004": { name: "Temporary Advance",                  category: "Asset" },
    "102003005": { name: "Temporary Advance",                  category: "Asset" },
    "102003006": { name: "Temporary Advance",                  category: "Asset" },
    "102003007": { name: "Temporary Advance",                  category: "Asset" },
    "102003008": { name: "Temporary Advance",                  category: "Asset" },
    "102003009": { name: "Temporary Advance",                  category: "Asset" },
    "102003010": { name: "Temporary Advance",                  category: "Asset" },

    "103001": { name: "Accounts Receivable",                 category: "Asset" },
    "103001001": { name: "Accounts Receivable",                 category: "Asset" },
    "103001002": { name: "Accounts Receivable",                 category: "Asset" },
    "103001003": { name: "Accounts Receivable",                 category: "Asset" },
    "103001004": { name: "Accounts Receivable",                 category: "Asset" },
    "103001005": { name: "Accounts Receivable",                 category: "Asset" },
    "103001006": { name: "Accounts Receivable",                 category: "Asset" },
    "103001007": { name: "Accounts Receivable",                 category: "Asset" },
    "103001008": { name: "Accounts Receivable",                 category: "Asset" },
    "103001009": { name: "Accounts Receivable",                 category: "Asset" },
    "103001010": { name: "Accounts Receivable",                 category: "Asset" },
   
    "103002": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    "103002001": { name: "Customers - Wholesale",                 category: "Asset" },
    
    "103003": { name: "Customers - Exporte",                 category: "Asset" },
    "103003001": { name: "Customers - Exporte",                 category: "Asset" },
    "103003002": { name: "Customers - Exporte",                 category: "Asset" },
    "103003003": { name: "Customers - Exporte",                 category: "Asset" },
    "103003004": { name: "Customers - Exporte",                 category: "Asset" },
    "103003005": { name: "Customers - Exporte",                 category: "Asset" },
    "103003006": { name: "Customers - Exporte",                 category: "Asset" },
    "103003007": { name: "Customers - Exporte",                 category: "Asset" },
    "103003008": { name: "Customers - Exporte",                 category: "Asset" },
    "103003009": { name: "Customers - Exporte",                 category: "Asset" },
    "103003010": { name: "Customers - Exporte",                 category: "Asset" },
    

    "104001": { name: "Accrued Revenue",                 category: "Asset" },
    "104001001": { name: "Accrued Revenue",                 category: "Asset" },
    "104001002": { name: "Accrued Revenue",                 category: "Asset" },
    "104001003": { name: "Accrued Revenue",                 category: "Asset" },
    "104001004": { name: "Accrued Revenue",                 category: "Asset" },
    "104001005": { name: "Accrued Revenue",                 category: "Asset" },
    "104001006": { name: "Accrued Revenue",                 category: "Asset" },
    "104001007": { name: "Accrued Revenue",                 category: "Asset" },
    "104001008": { name: "Accrued Revenue",                 category: "Asset" },
    "104001009": { name: "Accrued Revenue",                 category: "Asset" },
    "104001010": { name: "Accrued Revenue",                 category: "Asset" },

     "104001": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002001": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002002": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002003": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002004": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002005": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002006": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002007": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002008": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002009": { name: "Prepaid Expenses",                 category: "Asset" },
    "104002010": { name: "Prepaid Expenses",                 category: "Asset" },

    "104003": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003001": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003002": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003003": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003004": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003005": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003006": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003007": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003008": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003009": { name: "Deposits with Third Parties",                 category: "Asset" },
    "104003010": { name: "Deposits with Third Parties",                 category: "Asset" },

    "104004": { name: "Taxes Receivable",                 category: "Asset" },
    "104004001": { name: "Taxes Receivable",                 category: "Asset" },
    "104004002": { name: "Taxes Receivable",                 category: "Asset" },
    "104004003": { name: "Taxes Receivable",                 category: "Asset" },
    "104004004": { name: "Taxes Receivable",                 category: "Asset" },
    "104004005": { name: "Taxes Receivable",                 category: "Asset" },
    "104004006": { name: "Taxes Receivable",                 category: "Asset" },
    "104004007": { name: "Taxes Receivable",                 category: "Asset" },
    "104004008": { name: "Taxes Receivable",                 category: "Asset" },
    "104004009": { name: "Taxes Receivable",                 category: "Asset" },
    "104004010": { name: "Taxes Receivable",                 category: "Asset" },

    "104005": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005001": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005002": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005003": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005004": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005005": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005006": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005007": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005008": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005009": { name: "Other Receivable Balances",                 category: "Asset" },
    "104005010": { name: "Other Receivable Balances",                 category: "Asset" },

    "105001": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001001": { name: "inventory - Refrigerator No. 1 - Raw Dates",                 category: "Asset" },
    "105001002": { name: "inventory - Refrigerator No. 1 - Dates in Process",                 category: "Asset" },
    "105001003": { name: "inventory - Refrigerator No. 1 - Finished Dates",                 category: "Asset" },
    "105001004": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001005": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001006": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001007": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001008": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001009": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },
    "105001010": { name: "inventory - Refrigerator No. 1",                 category: "Asset" },


    "105002": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002001": { name: "inventory - Refrigerator No. 2 - Raw Dates",                 category: "Asset" },
    "105002002": { name: "inventory - Refrigerator No. 2 - Dates in Process",                 category: "Asset" },
    "105002003": { name: "inventory - Refrigerator No. 2 - Finished Dates",                 category: "Asset" },
    "105002004": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002005": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002006": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002007": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002008": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002009": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },
    "105002010": { name: "inventory - Refrigerator No. 2",                 category: "Asset" },

    "105003": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003001": { name: "inventory - Refrigerator No. 3 - Raw Dates",                 category: "Asset" },
    "105003002": { name: "inventory - Refrigerator No. 3 - Dates in Process",                 category: "Asset" },
    "105003003": { name: "inventory - Refrigerator No. 3 - Finished Dates",                 category: "Asset" },
    "105003004": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003005": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003006": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003007": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003008": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003009": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },
    "105003010": { name: "inventory - Refrigerator No. 3",                 category: "Asset" },



    "201001001": { name: "Accounts Payable - Suppliers",        category: "Liability" },
    "202001001": { name: "Short-term Loans",                    category: "Liability" },
    "203001001": { name: "Accrued Salaries",                    category: "Liability" },
    "301001001": { name: "Capital Stock",                       category: "Equity" },
    "302001001": { name: "Retained Earnings",                   category: "Equity" },
    "401001001": { name: "Sales Revenue - Dates",               category: "Revenue" },
    "401001002": { name: "Sales Revenue - Wholesale",           category: "Revenue" },
    "402001001": { name: "Service Revenue",                     category: "Revenue" },
    "501001001": { name: "Rent Expense",                        category: "Expense" },
    "501001002": { name: "Electricity & Water Expense",         category: "Expense" },
    "502001016": { name: "General Expenses - Tips",             category: "Expense" },
    "503001001": { name: "Marketing & Advertising",             category: "Expense" },
    "504001001": { name: "Salaries Expense",                    category: "Expense" },


"105004": { name: "Packaging Materials - Carton Warehouse", category: "Asset" },
"105004001": { name: "Packaging Materials", category: "Asset" },
"105004002": { name: "Packaging Materials", category: "Asset" },
"105004003": { name: "Packaging Materials", category: "Asset" },
"105004004": { name: "Packaging Materials", category: "Asset" },
"105004005": { name: "Packaging Materials", category: "Asset" },
"105004006": { name: "Packaging Materials", category: "Asset" },
"105004007": { name: "Packaging Materials", category: "Asset" },
"105004008": { name: "Packaging Materials", category: "Asset" },
"105004009": { name: "Packaging Materials", category: "Asset" },
"105004010": { name: "Packaging Materials", category: "Asset" },

"105005": { name: "Materials & Supplies - Warehouse", category: "Asset" },
"105005001": { name: "Materials & Supplies", category: "Asset" },
"105005002": { name: "Materials & Supplies", category: "Asset" },
"105005003": { name: "Materials & Supplies", category: "Asset" },
"105005004": { name: "Materials & Supplies", category: "Asset" },
"105005005": { name: "Materials & Supplies", category: "Asset" },
"105005006": { name: "Materials & Supplies", category: "Asset" },
"105005007": { name: "Materials & Supplies", category: "Asset" },
"105005008": { name: "Materials & Supplies", category: "Asset" },
"105005009": { name: "Materials & Supplies", category: "Asset" },
"105005010": { name: "Materials & Supplies", category: "Asset" },

"201": { name: "Equity", category: "Equity" },

"201001": { name: "Paid-in Capital", category: "Equity" },
"201001001": { name: "Capital", category: "Equity" },
"201001002": { name: "Capital", category: "Equity" },
"201001003": { name: "Capital", category: "Equity" },
"201001004": { name: "Capital", category: "Equity" },
"201001005": { name: "Capital", category: "Equity" },
"201001006": { name: "Capital", category: "Equity" },
"201001007": { name: "Capital", category: "Equity" },
"201001008": { name: "Capital", category: "Equity" },
"201001009": { name: "Capital", category: "Equity" },
"201001010": { name: "Capital", category: "Equity" },

"201002": { name: "Capital Increase", category: "Equity" },
"201002001": { name: "Capital Increase", category: "Equity" },
"201002002": { name: "Capital Increase", category: "Equity" },
"201002003": { name: "Capital Increase", category: "Equity" },
"201002004": { name: "Capital Increase", category: "Equity" },
"201002005": { name: "Capital Increase", category: "Equity" },
"201002006": { name: "Capital Increase", category: "Equity" },
"201002007": { name: "Capital Increase", category: "Equity" },
"201002008": { name: "Capital Increase", category: "Equity" },
"201002009": { name: "Capital Increase", category: "Equity" },
"201002010": { name: "Capital Increase", category: "Equity" },

"201003": { name: "Profit & Loss", category: "Equity" },
"201003001": { name: "Current Year Profit/Loss", category: "Equity" },
"201003002": { name: "Retained Earnings (Previous Years)", category: "Equity" },
"201003003": { name: "Foreign Currency Revaluation", category: "Equity" },
"201003004": { name: "Profit & Loss", category: "Equity" },
"201003005": { name: "Profit & Loss", category: "Equity" },
"201003006": { name: "Profit & Loss", category: "Equity" },
"201003007": { name: "Profit & Loss", category: "Equity" },
"201003008": { name: "Profit & Loss", category: "Equity" },
"201003009": { name: "Profit & Loss", category: "Equity" },
"201003010": { name: "Profit & Loss", category: "Equity" },

"202": { name: "Non-Current Liabilities", category: "Liability" },

"202001": { name: "Lease Liabilities", category: "Liability" },
"202001001": { name: "Lease", category: "Liability" },
"202001002": { name: "Lease", category: "Liability" },
"202001003": { name: "Lease", category: "Liability" },
"202001004": { name: "Lease", category: "Liability" },
"202001005": { name: "Lease", category: "Liability" },
"202001006": { name: "Lease", category: "Liability" },
"202001007": { name: "Lease", category: "Liability" },
"202001008": { name: "Lease", category: "Liability" },
"202001009": { name: "Lease", category: "Liability" },
"202001010": { name: "Lease", category: "Liability" },

"202002": { name: "Long-term Loans", category: "Liability" },
"202002001": { name: "Long-term Loans", category: "Liability" },
"202002002": { name: "Long-term Loans", category: "Liability" },
"202002003": { name: "Long-term Loans", category: "Liability" },
"202002004": { name: "Long-term Loans", category: "Liability" },
"202002005": { name: "Long-term Loans", category: "Liability" },
"202002006": { name: "Long-term Loans", category: "Liability" },
"202002007": { name: "Long-term Loans", category: "Liability" },
"202002008": { name: "Long-term Loans", category: "Liability" },
"202002009": { name: "Long-term Loans", category: "Liability" },
"202002010": { name: "Long-term Loans", category: "Liability" },

"203": { name: "Current Liabilities", category: "Liability" },

"203001": { name: "Suppliers", category: "Liability" },
"203001001": { name: "Suppliers", category: "Liability" },
"203001002": { name: "Suppliers", category: "Liability" },
"203001003": { name: "Suppliers", category: "Liability" },
"203001004": { name: "Suppliers", category: "Liability" },
"203001005": { name: "Suppliers", category: "Liability" },
"203001006": { name: "Suppliers", category: "Liability" },
"203001007": { name: "Suppliers", category: "Liability" },
"203001008": { name: "Suppliers", category: "Liability" },
"203001009": { name: "Suppliers", category: "Liability" },
"203001010": { name: "Suppliers", category: "Liability" },

"203002": { name: "Provisions", category: "Liability" },
"203002001": { name: "Provisions", category: "Liability" },
"203002002": { name: "Provisions", category: "Liability" },
"203002003": { name: "Provisions", category: "Liability" },
"203002004": { name: "Provisions", category: "Liability" },
"203002005": { name: "Provisions", category: "Liability" },
"203002006": { name: "Provisions", category: "Liability" },
"203002007": { name: "Provisions", category: "Liability" },
"203002008": { name: "Provisions", category: "Liability" },
"203002009": { name: "Provisions", category: "Liability" },
"203002010": { name: "Provisions", category: "Liability" },

"203003": { name: "Partners Current Accounts", category: "Liability" },
"203003001": { name: "Partners Current Accounts", category: "Liability" },
"203003002": { name: "Partners Current Accounts", category: "Liability" },
"203003003": { name: "Partners Current Accounts", category: "Liability" },
"203003004": { name: "Partners Current Accounts", category: "Liability" },
"203003005": { name: "Partners Current Accounts", category: "Liability" },
"203003006": { name: "Partners Current Accounts", category: "Liability" },
"203003007": { name: "Partners Current Accounts", category: "Liability" },
"203003008": { name: "Partners Current Accounts", category: "Liability" },
"203003009": { name: "Partners Current Accounts", category: "Liability" },
"203003010": { name: "Partners Current Accounts", category: "Liability" },

"203004": { name: "Taxes Payable", category: "Liability" },

"203007": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007001": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007002": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007003": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007004": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007005": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007006": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007007": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007008": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007009": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007010": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007011": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007012": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007013": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007014": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007015": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007016": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007017": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007018": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007019": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },
"203007020": { name: "Accumulated Depreciation - Fixed Assets", category: "Liability" },

"301": { name: "Operating Expenses", category: "Expense" },
"302": { name: "General & Administrative Expenses", category: "Expense" },

"401": { name: "Direct Revenues", category: "Revenue" },
"402": { name: "Indirect Revenues", category: "Revenue" }
};

// ═══════════════════════════════════════════════
// DATA LAYER
// ═══════════════════════════════════════════════
function getData() {
    try { return JSON.parse(localStorage.getItem("pro_audit_db")) || []; }
    catch { return []; }
}
function saveData(data) {
    localStorage.setItem("pro_audit_db", JSON.stringify(data));
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (pageId === 'dashboard-page') renderDashboard();
    if (pageId === 'reports-page')   calculateReports();
    if (pageId === 'income-page')    calculateReports();
    if (pageId === 'balance-page')   calculateReports();
    if (pageId === 'journal-page')   renderJournal();
    if (pageId === 'trial-page')     generateTrialBalance();
    if (pageId === 'coa-page')       renderCOA();
}

// ═══════════════════════════════════════════════
// SHARED: build account net-balance buckets
// ═══════════════════════════════════════════════
function buildTotals(data) {
    const accounts = {};
    data.forEach(e => {
        if (!accounts[e.code]) {
            accounts[e.code] = { name: e.name, category: e.category, debit: 0, credit: 0 };
        }
        if (e.type === "Debit")  accounts[e.code].debit  += e.amount;
        if (e.type === "Credit") accounts[e.code].credit += e.amount;
    });

    const totals  = { Asset: 0, Liability: 0, Equity: 0, Revenue: 0, Expense: 0 };
    const buckets = { Asset: {}, Liability: {}, Equity: {}, Revenue: {}, Expense: {} };

    Object.values(accounts).forEach(acc => {
        const cat = acc.category;
        const net = (cat === "Asset" || cat === "Expense")
            ? acc.debit - acc.credit
            : acc.credit - acc.debit;
        totals[cat]  += net;
        buckets[cat][acc.name] = (buckets[cat][acc.name] || 0) + net;
    });

    return { totals, buckets };
}

// ═══════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════
let incomeChart = null;
let categoryChart = null;

function renderDashboard() {
    const data = getData();
    const { totals } = buildTotals(data);
    const profit = totals.Revenue - totals.Expense;

    document.getElementById("dash-assets").textContent   = formatCurrency(totals.Asset);
    document.getElementById("dash-revenue").textContent  = formatCurrency(totals.Revenue);
    document.getElementById("dash-expenses").textContent = formatCurrency(totals.Expense);
    document.getElementById("dash-profit").textContent   = formatCurrency(profit);

    // Recent transactions
    const recent = [...data].reverse().slice(0, 8);
    document.getElementById("recent-rows").innerHTML = recent.length
        ? recent.map(e => `
            <tr>
                <td>${e.date || '—'}</td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.78rem;color:var(--text-muted)">${e.journalNo}</span></td>
                <td>${e.name}</td>
                <td><span class="${e.type === 'Debit' ? 'badge-debit' : 'badge-credit'}">${e.type}</span></td>
                <td class="amount-cell">${formatCurrency(e.amount)}</td>
            </tr>`).join('')
        : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px">No transactions yet</td></tr>`;

    // Bar chart
    const ctx1 = document.getElementById("incomeExpenseChart").getContext("2d");
    if (incomeChart) incomeChart.destroy();
    incomeChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Expenses', 'Net Profit'],
            datasets: [{
                data: [totals.Revenue, totals.Expense, profit],
                backgroundColor: ['#10b981', '#ef4444', profit >= 0 ? '#2563eb' : '#f59e0b'],
                borderRadius: 8, borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { callback: v => '$' + v.toLocaleString() } },
                x: { grid: { display: false } }
            }
        }
    });

    // Donut chart
    const ctx2 = document.getElementById("categoryChart").getContext("2d");
    if (categoryChart) categoryChart.destroy();
    const colorMap = { Asset:'#2563eb', Liability:'#ef4444', Equity:'#8b5cf6', Revenue:'#10b981', Expense:'#f59e0b' };
    const catLabels = [], catValues = [], catColors = [];
    Object.entries(totals).forEach(([cat, val]) => {
        if (Math.abs(val) > 0) { catLabels.push(cat); catValues.push(Math.abs(val)); catColors.push(colorMap[cat]); }
    });
    categoryChart = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: catLabels, datasets: [{ data: catValues, backgroundColor: catColors, borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }] },
        options: { responsive: true, cutout: '65%', plugins: { legend: { position: 'bottom', labels: { padding: 16, font: { family: 'DM Sans', size: 12 } } } } }
    });
}

// ═══════════════════════════════════════════════
// JOURNAL ENTRY
// ═══════════════════════════════════════════════
function addNewLine() {
    const tbody = document.getElementById("entry-rows");
    const rowId = `r${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const tr = document.createElement("tr");
    tr.id = rowId;
    tr.innerHTML = `
        <td><input type="text" class="row-code" placeholder="e.g. 102001004" oninput="updateRowName(this, '${rowId}')"></td>
        <td><span class="row-name-text" id="name-${rowId}">—</span></td>
        <td><input type="number" class="row-debit"  min="0" step="0.01" placeholder="0.00" oninput="validateJournalBalance()"></td>
        <td><input type="number" class="row-credit" min="0" step="0.01" placeholder="0.00" oninput="validateJournalBalance()"></td>
        <td><button class="btn-delete" onclick="removeRow('${rowId}')" title="Remove">✕</button></td>
    `;
    tbody.appendChild(tr);
}

function removeRow(rowId) {
    const row = document.getElementById(rowId);
    if (row) row.remove();
    validateJournalBalance();
}

function updateRowName(input, rowId) {
    const code = input.value.trim();
    const nameSpan = document.getElementById(`name-${rowId}`);
    if (chartOfAccounts[code]) {
        nameSpan.textContent = chartOfAccounts[code].name;
        nameSpan.className   = 'row-name-text found';
    } else if (code.length > 0) {
        nameSpan.textContent = 'Unknown Code';
        nameSpan.className   = 'row-name-text not-found';
    } else {
        nameSpan.textContent = '—';
        nameSpan.className   = 'row-name-text';
    }
    validateJournalBalance();
}

function validateJournalBalance() {
    let deb = 0, cre = 0;
    document.querySelectorAll(".row-debit").forEach(i  => deb += parseFloat(i.value) || 0);
    document.querySelectorAll(".row-credit").forEach(i => cre += parseFloat(i.value) || 0);

    document.getElementById("total-debit-live").textContent  = deb.toFixed(2);
    document.getElementById("total-credit-live").textContent = cre.toFixed(2);

    const diff       = deb - cre;
    const isBalanced = Math.abs(diff) < 0.001 && deb > 0;
    const indicator  = document.getElementById("entry-balance-status");
    indicator.textContent = isBalanced ? `✓ Balanced: ${deb.toFixed(2)}` : `⚖ Difference: ${diff.toFixed(2)}`;
    indicator.className   = 'balance-indicator ' + (isBalanced ? 'balanced' : 'unbalanced');
    return isBalanced;
}

function postJournalEntry() {
    if (!validateJournalBalance()) {
        alert("Entry is not balanced! Debit must equal Credit and be greater than zero.");
        return;
    }
    const date = document.getElementById("entry-date").value;
    const jNo  = document.getElementById("journal-no").value.trim();
    const expl = document.getElementById("explanation").value.trim();

    if (!date || !jNo) { alert("Please fill in the Date and Journal Number."); return; }

    const data = getData();
    let hasValidRow = false;

    try {
        document.querySelectorAll("#entry-rows tr").forEach(row => {
            const code = row.querySelector(".row-code").value.trim();
            const deb  = parseFloat(row.querySelector(".row-debit").value)  || 0;
            const cre  = parseFloat(row.querySelector(".row-credit").value) || 0;
            if (!code || (deb === 0 && cre === 0)) return;
            if (!chartOfAccounts[code]) { alert(`Unknown code: "${code}". Fix before posting.`); throw new Error("invalid"); }
            hasValidRow = true;
            data.push({
                id: Date.now() + Math.random(),
                date, journalNo: jNo, explanation: expl,
                code,
                name:     chartOfAccounts[code].name,
                category: chartOfAccounts[code].category,
                type:   deb > 0 ? "Debit" : "Credit",
                amount: deb > 0 ? deb : cre
            });
        });
    } catch { return; }

    if (!hasValidRow) { alert("No valid rows to post."); return; }

    saveData(data);

    // Reset
    document.getElementById("entry-rows").innerHTML = "";
    document.getElementById("journal-no").value  = "";
    document.getElementById("explanation").value = "";
    document.getElementById("entry-balance-status").textContent = "⚖ Balance: 0.00";
    document.getElementById("entry-balance-status").className   = "balance-indicator";
    document.getElementById("total-debit-live").textContent  = "0.00";
    document.getElementById("total-credit-live").textContent = "0.00";
    addNewLine(); addNewLine();
    showSuccessToast("Transaction posted successfully!");
}

// ═══════════════════════════════════════════════
// JOURNAL VIEW
// ═══════════════════════════════════════════════
function renderJournal() {
    const data  = getData();
    const query = (document.getElementById("journal-search")?.value || "").trim();
    const filtered = query
        ? data.filter(e => e.code.includes(query))
        : data;

    document.getElementById("journal-rows").innerHTML = filtered.length
        ? filtered.map((e, idx) => `
            <tr>
                <td>${e.date || '—'}</td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.78rem">${e.journalNo}</span></td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.78rem;color:var(--text-muted)">${e.code}</span></td>
                <td>${e.name}</td>
                <td><span class="${e.type === 'Debit' ? 'badge-debit' : 'badge-credit'}">${e.type}</span></td>
                <td class="amount-cell">${formatCurrency(e.amount)}</td>
                <td><button class="btn-delete" onclick="deleteEntry(${idx})" title="Delete">✕</button></td>
            </tr>`).join('')
        : `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:40px">No entries found</td></tr>`;
}

function deleteEntry(index) {
    if (!confirm("Delete this entry?")) return;
    const data = getData();
    data.splice(index, 1);
    saveData(data);
    renderJournal();
}

function clearAllData() {
    if (!confirm("DELETE ALL data? This cannot be undone.")) return;
    localStorage.removeItem("pro_audit_db");
    renderJournal();
    showSuccessToast("All data cleared.");
}

function exportJournalCSV() {
    const data = getData();
    if (!data.length) { alert("No data to export."); return; }
    const headers = ["Date","Journal No","Code","Account","Category","Type","Amount"];
    const rows    = data.map(e => [e.date, e.journalNo, e.code, `"${e.name}"`, e.category, e.type, e.amount]);
    const csv     = [headers, ...rows].map(r => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href     = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "journal.csv";
    a.click();
}

// ═══════════════════════════════════════════════
// TRIAL BALANCE
// ═══════════════════════════════════════════════
function generateTrialBalance() {
    const data      = getData();
    const startDate = document.getElementById("start-date")?.value;
    const endDate   = document.getElementById("end-date")?.value;

    const filtered = data.filter(e => {
        if (startDate && e.date < startDate) return false;
        if (endDate   && e.date > endDate)   return false;
        return true;
    });

    const accounts = {};
    filtered.forEach(e => {
        if (!accounts[e.code]) accounts[e.code] = { name: e.name, category: e.category, debit: 0, credit: 0 };
        if (e.type === "Debit")  accounts[e.code].debit  += e.amount;
        if (e.type === "Credit") accounts[e.code].credit += e.amount;
    });

    let totalDeb = 0, totalCre = 0;
    const rows = Object.entries(accounts).map(([code, acc]) => {
        totalDeb += acc.debit;
        totalCre += acc.credit;
        const bal = acc.debit - acc.credit;
        const balStr = bal !== 0
            ? `<span class="${bal > 0 ? 'badge-debit' : 'badge-credit'}">${formatCurrency(Math.abs(bal))} ${bal > 0 ? 'Dr' : 'Cr'}</span>`
            : '—';
        return `<tr>
            <td><span style="font-family:'DM Mono',monospace;font-size:.78rem">${code}</span></td>
            <td>${acc.name}</td>
            <td><span style="font-size:.72rem;background:var(--surface-2);padding:2px 8px;border-radius:4px">${acc.category}</span></td>
            <td class="amount-cell">${acc.debit  > 0 ? formatCurrency(acc.debit)  : '—'}</td>
            <td class="amount-cell">${acc.credit > 0 ? formatCurrency(acc.credit) : '—'}</td>
            <td>${balStr}</td>
        </tr>`;
    });

    document.getElementById("trial-rows").innerHTML = rows.length
        ? rows.join('')
        : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:40px">No data</td></tr>`;

    document.getElementById("total-debit").textContent  = formatCurrency(totalDeb);
    document.getElementById("total-credit").textContent = formatCurrency(totalCre);

    const isBalanced = Math.abs(totalDeb - totalCre) < 0.01;
    const badge = document.getElementById("balance-badge");
    badge.textContent = isBalanced
        ? "✓ Trial Balance is Balanced"
        : `✗ Out of Balance by ${formatCurrency(Math.abs(totalDeb - totalCre))}`;
    badge.className = "badge " + (isBalanced ? "success-bg" : "danger-bg");
}

// ═══════════════════════════════════════════════
// FINANCIAL REPORTS  (shared — used by both pages)
// ═══════════════════════════════════════════════
function calculateReports() {
    const data = getData();
    const { totals, buckets } = buildTotals(data);
    const profit = totals.Revenue - totals.Expense;

    // ── Income Statement ─────────────────────────────────
    const revDetail    = document.getElementById("report-rev-detail");
    const expDetail    = document.getElementById("report-exp-detail");
    const reportRev    = document.getElementById("report-rev");
    const reportExp    = document.getElementById("report-exp");
    const reportProfit = document.getElementById("report-profit");

    if (revDetail)    revDetail.innerHTML    = detailLines(buckets.Revenue);
    if (expDetail)    expDetail.innerHTML    = detailLines(buckets.Expense);
    if (reportRev)    reportRev.textContent  = formatCurrency(totals.Revenue);
    if (reportExp)    reportExp.textContent  = formatCurrency(totals.Expense);
    if (reportProfit) {
        reportProfit.textContent  = formatCurrency(profit);
        reportProfit.style.color  = profit >= 0 ? "var(--success)" : "var(--danger)";
    }

    // ── Balance Sheet ─────────────────────────────────────
    const assetDetail  = document.getElementById("report-asset-detail");
    const liabDetail   = document.getElementById("report-liab-detail");
    const equityDetail = document.getElementById("report-equity-detail");
    const reportAssets = document.getElementById("report-assets");
    const reportLiab   = document.getElementById("report-liab");
    const reportEquity = document.getElementById("report-equity");
    const bsCheck      = document.getElementById("bs-check");

    const totalEquity = totals.Equity + profit;

    if (assetDetail)  assetDetail.innerHTML  = detailLines(buckets.Asset);
    if (liabDetail)   liabDetail.innerHTML   = detailLines(buckets.Liability);
    if (equityDetail) equityDetail.innerHTML = detailLines(buckets.Equity);
    if (reportAssets) reportAssets.textContent = formatCurrency(totals.Asset);
    if (reportLiab)   reportLiab.textContent   = formatCurrency(totals.Liability);
    if (reportEquity) reportEquity.textContent = formatCurrency(totalEquity);

    if (bsCheck) {
        const diff = totals.Asset - (totals.Liability + totalEquity);
        if (Math.abs(diff) < 0.01) {
            bsCheck.innerHTML   = "<span>✓ Balance Sheet is Balanced</span><span style='color:var(--success)'>✓</span>";
            bsCheck.style.color = "var(--success)";
        } else {
            bsCheck.innerHTML   = `<span>⚠ Difference</span><span style='color:var(--danger)'>${formatCurrency(Math.abs(diff))}</span>`;
            bsCheck.style.color = "var(--danger)";
        }
    }
}

function detailLines(bucket) {
    return Object.entries(bucket)
        .filter(([, v]) => v !== 0)
        .map(([name, val]) => `
            <div class="report-line">
                <span style="color:var(--text-muted);font-size:.82rem">${name}</span>
                <span>${formatCurrency(val)}</span>
            </div>`).join('');
}

// ═══════════════════════════════════════════════
// CHART OF ACCOUNTS PAGE
// ═══════════════════════════════════════════════
let coaActiveCat = 'All';

function renderCOA() {
    const query = (document.getElementById('coa-search')?.value || '').toLowerCase().trim();
    const cats  = ['All', 'Asset', 'Liability', 'Equity', 'Revenue', 'Expense'];
    const catClass = { Asset:'cat-asset', Liability:'cat-liability', Equity:'cat-equity', Revenue:'cat-revenue', Expense:'cat-expense' };
    const dotClass = { Asset:'dot-asset', Liability:'dot-liability', Equity:'dot-equity', Revenue:'dot-revenue', Expense:'dot-expense' };

    // Build filter buttons once
    const filterEl = document.getElementById('coa-cat-filters');
    if (!filterEl.hasChildNodes()) {
        cats.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'coa-filter-btn' + (cat === coaActiveCat ? ' active' : '');
            btn.dataset.cat = cat;
            btn.textContent = cat;
            btn.onclick = () => { coaActiveCat = cat; document.querySelectorAll('.coa-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat)); renderCOA(); };
            filterEl.appendChild(btn);
        });
    }

    // Parse all accounts into hierarchy: groupCode → { meta, subgroups: { subCode → { meta, leaves } } }
    const all   = Object.entries(chartOfAccounts);
    const total = all.length;
    document.getElementById('coa-count').textContent = total;

    // Separate by code depth: 2-3 digits = root/group, 6 digits = subgroup, 9+ = leaf
    const isGroup    = code => code.length <= 3;
    const isSubgroup = code => code.length >= 4 && code.length <= 6;
    const isLeaf     = code => code.length > 6;

    // Build tree
    const tree = {};
    all.forEach(([code, acc]) => {
        if (isGroup(code)) {
            if (!tree[code]) tree[code] = { meta: acc, code, subgroups: {} };
            else { tree[code].meta = acc; tree[code].code = code; }
        }
    });
    all.forEach(([code, acc]) => {
        if (isSubgroup(code)) {
            const parentCode = Object.keys(tree).find(g => code.startsWith(g));
            if (parentCode) {
                if (!tree[parentCode].subgroups[code]) tree[parentCode].subgroups[code] = { meta: acc, code, leaves: [] };
            } else {
                // orphan subgroup — create implicit parent
                const implicitParent = code.slice(0, 3);
                if (!tree[implicitParent]) tree[implicitParent] = { meta: { name: implicitParent, category: acc.category }, code: implicitParent, subgroups: {} };
                if (!tree[implicitParent].subgroups[code]) tree[implicitParent].subgroups[code] = { meta: acc, code, leaves: [] };
            }
        }
    });
    all.forEach(([code, acc]) => {
        if (isLeaf(code)) {
            const subCode = Object.keys(Object.values(tree).reduce((o, g) => Object.assign(o, g.subgroups), {})).find(s => code.startsWith(s));
            if (subCode) {
                const parentGroup = Object.values(tree).find(g => g.subgroups[subCode]);
                if (parentGroup) parentGroup.subgroups[subCode].leaves.push({ code, ...acc });
            } else {
                // orphan leaf — find closest group
                const gCode = Object.keys(tree).find(g => code.startsWith(g));
                if (gCode) {
                    const fallbackSub = code.slice(0, 6);
                    if (!tree[gCode].subgroups[fallbackSub]) tree[gCode].subgroups[fallbackSub] = { meta: { name: fallbackSub, category: acc.category }, code: fallbackSub, leaves: [] };
                    tree[gCode].subgroups[fallbackSub].leaves.push({ code, ...acc });
                }
            }
        }
    });

    // Filter
    const filteredGroups = Object.entries(tree).filter(([, g]) => {
        if (coaActiveCat !== 'All' && g.meta.category !== coaActiveCat) return false;
        if (!query) return true;
        const matchGroup = g.code.includes(query) || g.meta.name.toLowerCase().includes(query);
        const matchSub   = Object.values(g.subgroups).some(s => s.code.includes(query) || s.meta.name.toLowerCase().includes(query) || s.leaves.some(l => l.code.includes(query) || l.name.toLowerCase().includes(query)));
        return matchGroup || matchSub;
    });

    const grid = document.getElementById('coa-grid');
    if (!filteredGroups.length) {
        grid.innerHTML = '<div class="coa-empty">No accounts found</div>';
        return;
    }

    grid.innerHTML = filteredGroups.sort(([a], [b]) => a.localeCompare(b)).map(([gCode, group]) => {
        const cat   = group.meta.category;
        const dc    = dotClass[cat]  || 'dot-asset';
        const cc    = catClass[cat]  || 'cat-asset';
        const leafCount = Object.values(group.subgroups).reduce((n, s) => n + s.leaves.length, 0);

        const subgroupsHTML = Object.entries(group.subgroups)
            .filter(([, s]) => {
                if (!query) return true;
                return s.code.includes(query) || s.meta.name.toLowerCase().includes(query) || s.leaves.some(l => l.code.includes(query) || l.name.toLowerCase().includes(query));
            })
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([sCode, sub]) => {
                const leavesHTML = sub.leaves
                    .filter(l => !query || l.code.includes(query) || l.name.toLowerCase().includes(query))
                    .map(l => `
                        <div class="coa-leaf-row">
                            <span class="coa-leaf-code">${l.code}</span>
                            <span class="coa-leaf-name">${l.name}</span>
                            <span class="coa-cat-badge ${cc}">${cat}</span>
                        </div>`).join('');
                return `
                    <div class="coa-subgroup">
                        <div class="coa-subgroup-header">
                            <span class="coa-subgroup-code">${sCode}</span>
                            <span class="coa-subgroup-name">${sub.meta.name}</span>
                        </div>
                        ${leavesHTML}
                    </div>`;
            }).join('');

        return `
            <div class="coa-group" id="coa-g-${gCode}">
                <div class="coa-group-header" onclick="toggleCoaGroup('coa-g-${gCode}')">
                    <div class="coa-group-header-left">
                        <span class="coa-group-dot ${dc}"></span>
                        <span class="coa-group-code">${gCode}</span>
                        <span class="coa-group-name">${group.meta.name}</span>
                    </div>
                    <div class="coa-group-header-right">
                        <span class="coa-cat-badge ${cc}">${cat}</span>
                        <span class="coa-count-badge">${leafCount} accounts</span>
                        <svg class="coa-chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                    </div>
                </div>
                <div class="coa-group-body">${subgroupsHTML || '<div style="padding:14px 20px;color:var(--text-muted);font-size:.85rem">No sub-accounts</div>'}</div>
            </div>`;
    }).join('');

    // Auto-open all groups when searching
    if (query) document.querySelectorAll('.coa-group').forEach(g => g.classList.add('open'));
}

function toggleCoaGroup(id) {
    document.getElementById(id)?.classList.toggle('open');
}

// ═══════════════════════════════════════════════
// ═══════════════════════════════════════════════
function formatCurrency(n) {
    return '$' + (parseFloat(n) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showSuccessToast(msg) {
    const t = document.createElement("div");
    t.textContent = "✓ " + msg;
    Object.assign(t.style, {
        position:"fixed", bottom:"24px", right:"24px",
        background:"#065f46", color:"white",
        padding:"12px 22px", borderRadius:"8px",
        fontWeight:"600", fontSize:"0.88rem",
        zIndex:"9999", boxShadow:"0 4px 20px rgba(0,0,0,.2)"
    });
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
window.onload = () => {
    const today = new Date().toISOString().split("T")[0];
    const d = document.getElementById("entry-date");
    if (d) d.value = today;
    addNewLine();
    addNewLine();
    renderDashboard();
};

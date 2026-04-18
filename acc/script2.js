// ═══════════════════════════════════════════════
// CHART OF ACCOUNTS
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
    
    "102002": { name: " CASH ",                  category: "Asset" },
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

    "105001": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001001": { name: "Warehouse - Refrigerator No. 1 - Raw Dates",                 category: "Asset" },
    "105001002": { name: "Warehouse - Refrigerator No. 1 - Dates in Process",                 category: "Asset" },
    "105001003": { name: "Warehouse - Refrigerator No. 1 - Finished Dates",                 category: "Asset" },
    "105001004": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001005": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001006": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001007": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001008": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001009": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },
    "105001010": { name: "Warehouse - Refrigerator No. 1",                 category: "Asset" },


    "105002": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002001": { name: "Warehouse - Refrigerator No. 2 - Raw Dates",                 category: "Asset" },
    "105002002": { name: "Warehouse - Refrigerator No. 2 - Dates in Process",                 category: "Asset" },
    "105002003": { name: "Warehouse - Refrigerator No. 2 - Finished Dates",                 category: "Asset" },
    "105002004": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002005": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002006": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002007": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002008": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002009": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },
    "105002010": { name: "Warehouse - Refrigerator No. 2",                 category: "Asset" },

    "105003": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003001": { name: "Warehouse - Refrigerator No. 3 - Raw Dates",                 category: "Asset" },
    "105003002": { name: "Warehouse - Refrigerator No. 3 - Dates in Process",                 category: "Asset" },
    "105003003": { name: "Warehouse - Refrigerator No. 3 - Finished Dates",                 category: "Asset" },
    "105003004": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003005": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003006": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003007": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003008": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003009": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },
    "105003010": { name: "Warehouse - Refrigerator No. 3",                 category: "Asset" },



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
    "504001001": { name: "Salaries Expense",                    category: "Expense" }
};

// ═══════════════════════════════════════════════
// DATA LAYER — LocalStorage
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

    if (pageId === 'dashboard-page') { renderDashboard(); }
    if (pageId === 'reports-page')   { calculateReports(); }
    if (pageId === 'journal-page')   { renderJournal(); }
    if (pageId === 'trial-page')     { generateTrialBalance(); }
}

// ═══════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════
let incomeChart = null;
let categoryChart = null;

function renderDashboard() {
    const data = getData();

    // ── Correct Net Balance per account ──────────────────────────────────────
    // For Assets/Expenses: normal balance = Debit (positive = Debit > Credit)
    // For Liabilities/Equity/Revenue: normal balance = Credit (positive = Credit > Debit)
    const accounts = {};
    data.forEach(e => {
        if (!accounts[e.code]) {
            accounts[e.code] = { name: e.name, category: e.category, debit: 0, credit: 0 };
        }
        if (e.type === "Debit")  accounts[e.code].debit  += e.amount;
        if (e.type === "Credit") accounts[e.code].credit += e.amount;
    });

    
    let totals = { Asset: 0, Liability: 0, Equity: 0, Revenue: 0, Expense: 0 };
    Object.values(accounts).forEach(acc => {
        const net = acc.debit - acc.credit;
        if (acc.category === "Asset")     totals.Asset     += net;
        if (acc.category === "Expense")   totals.Expense   += net;
        if (acc.category === "Liability") totals.Liability += (acc.credit - acc.debit);
        if (acc.category === "Equity")    totals.Equity    += (acc.credit - acc.debit);
        if (acc.category === "Revenue")   totals.Revenue   += (acc.credit - acc.debit);
    });

    const profit = totals.Revenue - totals.Expense;

    document.getElementById("dash-assets").textContent   = formatCurrency(totals.Asset);
    document.getElementById("dash-revenue").textContent  = formatCurrency(totals.Revenue);
    document.getElementById("dash-expenses").textContent = formatCurrency(totals.Expense);
    document.getElementById("dash-profit").textContent   = formatCurrency(profit);

    // ── Recent Transactions ───────────────────────────────────────────────────
    const recent = [...data].reverse().slice(0, 8);
    document.getElementById("recent-rows").innerHTML = recent.length
        ? recent.map(e => `
            <tr>
                <td>${e.date || '—'}</td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.8rem;color:var(--text-muted)">${e.journalNo}</span></td>
                <td>${e.name}</td>
                <td><span class="${e.type === 'Debit' ? 'badge-debit' : 'badge-credit'}">${e.type}</span></td>
                <td class="amount-cell">${formatCurrency(e.amount)}</td>
            </tr>`).join('')
        : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px">No transactions yet</td></tr>`;

    // ── Income vs Expense Chart ───────────────────────────────────────────────
    const ctx1 = document.getElementById("incomeExpenseChart").getContext("2d");
    if (incomeChart) incomeChart.destroy();
    incomeChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Expenses', 'Net Profit'],
            datasets: [{
                data: [totals.Revenue, totals.Expense, profit],
                backgroundColor: ['#10b981', '#ef4444', profit >= 0 ? '#2563eb' : '#f59e0b'],
                borderRadius: 8,
                borderSkipped: false
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

    // ── Category Distribution Donut ───────────────────────────────────────────
    const ctx2 = document.getElementById("categoryChart").getContext("2d");
    if (categoryChart) categoryChart.destroy();

    const catLabels = [];
    const catValues = [];
    const catColors = [];
    const colorMap = { Asset: '#2563eb', Liability: '#ef4444', Equity: '#8b5cf6', Revenue: '#10b981', Expense: '#f59e0b' };

    Object.entries(totals).forEach(([cat, val]) => {
        if (val > 0) {
            catLabels.push(cat);
            catValues.push(Math.abs(val));
            catColors.push(colorMap[cat]);
        }
    });

    categoryChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: catLabels,
            datasets: [{ data: catValues, backgroundColor: catColors, borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
        },
        options: {
            responsive: true,
            cutout: '65%',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 16, font: { family: 'DM Sans', size: 12 } } }
            }
        }
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
        <td><input type="number" class="row-debit" min="0" step="0.01" value="" placeholder="0.00" oninput="validateJournalBalance()"></td>
        <td><input type="number" class="row-credit" min="0" step="0.01" value="" placeholder="0.00" oninput="validateJournalBalance()"></td>
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
        nameSpan.className = 'row-name-text found';
    } else if (code.length > 0) {
        nameSpan.textContent = 'Unknown Code';
        nameSpan.className = 'row-name-text not-found';
    } else {
        nameSpan.textContent = '—';
        nameSpan.className = 'row-name-text';
    }
    validateJournalBalance();
}

function validateJournalBalance() {
    let deb = 0, cre = 0;
    document.querySelectorAll(".row-debit").forEach(i  => deb += parseFloat(i.value) || 0);
    document.querySelectorAll(".row-credit").forEach(i => cre += parseFloat(i.value) || 0);

    // Update live totals in tfoot
    document.getElementById("total-debit-live").textContent  = deb.toFixed(2);
    document.getElementById("total-credit-live").textContent = cre.toFixed(2);

    const diff = deb - cre;
    const indicator = document.getElementById("entry-balance-status");
    const isBalanced = Math.abs(diff) < 0.001 && deb > 0;

    indicator.textContent = isBalanced ? `✓ Balanced: ${deb.toFixed(2)}` : `⚖ Difference: ${diff.toFixed(2)}`;
    indicator.className   = 'balance-indicator ' + (isBalanced ? 'balanced' : 'unbalanced');
    return isBalanced;
}

function postJournalEntry() {
    if (!validateJournalBalance()) {
        alert("Entry is not balanced! Debit must equal Credit and be greater than zero.");
        return;
    }

    const date  = document.getElementById("entry-date").value;
    const jNo   = document.getElementById("journal-no").value.trim();
    const expl  = document.getElementById("explanation").value.trim();

    if (!date || !jNo) {
        alert("Please fill in the Date and Journal Number.");
        return;
    }

    const data = getData();
    const rows = document.querySelectorAll("#entry-rows tr");
    let hasValidRow = false;

    rows.forEach(row => {
        const code  = row.querySelector(".row-code").value.trim();
        const deb   = parseFloat(row.querySelector(".row-debit").value)  || 0;
        const cre   = parseFloat(row.querySelector(".row-credit").value) || 0;

        if (!code || (deb === 0 && cre === 0)) return; // skip empty rows

        if (!chartOfAccounts[code]) {
            alert(`Unknown account code: "${code}". Please fix before posting.`);
            throw new Error("Invalid code");
        }

        hasValidRow = true;
        // A row can only have debit OR credit — if both entered, debit wins
        const type   = deb > 0 ? "Debit" : "Credit";
        const amount = deb > 0 ? deb : cre;

        data.push({
            id: Date.now() + Math.random(),
            date, journalNo: jNo, explanation: expl,
            code,
            name:     chartOfAccounts[code].name,
            category: chartOfAccounts[code].category,
            type, amount
        });
    });

    if (!hasValidRow) { alert("No valid rows to post."); return; }

    saveData(data);

    // Reset form
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
    const data     = getData();
    const query    = (document.getElementById("journal-search")?.value || "").toLowerCase();
    const filtered = query
        ? data.filter(e => e.name.toLowerCase().includes(query) || e.code.includes(query) || e.journalNo.toLowerCase().includes(query))
        : data;

    document.getElementById("journal-rows").innerHTML = filtered.length
        ? filtered.map((e, idx) => `
            <tr>
                <td>${e.date || '—'}</td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.8rem">${e.journalNo}</span></td>
                <td><span style="font-family:'DM Mono',monospace;font-size:.8rem;color:var(--text-muted)">${e.code}</span></td>
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
    if (!confirm("Are you sure you want to DELETE ALL data? This cannot be undone.")) return;
    localStorage.removeItem("pro_audit_db");
    renderJournal();
    showSuccessToast("All data cleared.");
}

function exportJournalCSV() {
    const data = getData();
    if (!data.length) { alert("No data to export."); return; }

    const headers = ["Date", "Journal No", "Code", "Account", "Category", "Type", "Amount"];
    const rows = data.map(e => [e.date, e.journalNo, e.code, `"${e.name}"`, e.category, e.type, e.amount]);
    const csv = [headers, ...rows].map(r => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "journal.csv"; a.click();
    URL.revokeObjectURL(url);
}

// ═══════════════════════════════════════════════
// TRIAL BALANCE — Fixed accounting logic
// ═══════════════════════════════════════════════
function generateTrialBalance() {
    const data      = getData();
    const startDate = document.getElementById("start-date")?.value;
    const endDate   = document.getElementById("end-date")?.value;

    // Filter by date if provided
    const filtered = data.filter(e => {
        if (startDate && e.date < startDate) return false;
        if (endDate   && e.date > endDate)   return false;
        return true;
    });

    // Accumulate per account
    const accounts = {};
    filtered.forEach(e => {
        if (!accounts[e.code]) {
            accounts[e.code] = { name: e.name, category: e.category, debit: 0, credit: 0 };
        }
        if (e.type === "Debit")  accounts[e.code].debit  += e.amount;
        if (e.type === "Credit") accounts[e.code].credit += e.amount;
    });

    let totalDeb = 0, totalCre = 0;
    const rows = Object.entries(accounts).map(([code, acc]) => {
        totalDeb += acc.debit;
        totalCre += acc.credit;
        const balance = acc.debit - acc.credit;
        const balanceStr = balance !== 0
            ? `<span class="${balance > 0 ? 'badge-debit' : 'badge-credit'}">${formatCurrency(Math.abs(balance))} ${balance > 0 ? 'Dr' : 'Cr'}</span>`
            : '—';
        return `
            <tr>
                <td><span style="font-family:'DM Mono',monospace;font-size:.8rem">${code}</span></td>
                <td>${acc.name}</td>
                <td><span style="font-size:.75rem;background:var(--surface-2);padding:3px 8px;border-radius:4px">${acc.category}</span></td>
                <td class="amount-cell">${acc.debit > 0 ? formatCurrency(acc.debit) : '—'}</td>
                <td class="amount-cell">${acc.credit > 0 ? formatCurrency(acc.credit) : '—'}</td>
                <td>${balanceStr}</td>
            </tr>`;
    });

    document.getElementById("trial-rows").innerHTML = rows.length
        ? rows.join('')
        : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:40px">No data</td></tr>`;

    document.getElementById("total-debit").textContent  = formatCurrency(totalDeb);
    document.getElementById("total-credit").textContent = formatCurrency(totalCre);

    const isBalanced = Math.abs(totalDeb - totalCre) < 0.01;
    const badge = document.getElementById("balance-badge");
    badge.textContent = isBalanced ? "✓ Trial Balance is Balanced" : `✗ Out of Balance by ${formatCurrency(Math.abs(totalDeb - totalCre))}`;
    badge.className   = "badge " + (isBalanced ? "success-bg" : "danger-bg");
}

// ═══════════════════════════════════════════════
// FINANCIAL REPORTS — Fixed logic
// ═══════════════════════════════════════════════
function calculateReports() {
    const data = getData();

    // Net balance per account using proper accounting rules
    const accounts = {};
    data.forEach(e => {
        if (!accounts[e.code]) {
            accounts[e.code] = { name: e.name, category: e.category, debit: 0, credit: 0 };
        }
        if (e.type === "Debit")  accounts[e.code].debit  += e.amount;
        if (e.type === "Credit") accounts[e.code].credit += e.amount;
    });

    const buckets = { Asset: {}, Liability: {}, Equity: {}, Revenue: {}, Expense: {} };
    const totals  = { Asset: 0, Liability: 0, Equity: 0, Revenue: 0, Expense: 0 };

    Object.entries(accounts).forEach(([code, acc]) => {
        const cat = acc.category;
        let net;
        // Normal balance side
        if (cat === "Asset" || cat === "Expense") {
            net = acc.debit - acc.credit; // debit-normal
        } else {
            net = acc.credit - acc.debit; // credit-normal
        }
        if (!buckets[cat]) return;
        buckets[cat][acc.name] = (buckets[cat][acc.name] || 0) + net;
        totals[cat] += net;
    });

    const profit = totals.Revenue - totals.Expense;

    // ── Income Statement ──────────────────────────────────────────────────────
    document.getElementById("report-rev-detail").innerHTML =
        detailLines(buckets.Revenue);
    document.getElementById("report-exp-detail").innerHTML =
        detailLines(buckets.Expense);
    document.getElementById("report-rev").textContent    = formatCurrency(totals.Revenue);
    document.getElementById("report-exp").textContent    = formatCurrency(totals.Expense);
    document.getElementById("report-profit").textContent = formatCurrency(profit);
    document.getElementById("report-profit").style.color = profit >= 0 ? "var(--success)" : "var(--danger)";

    // ── Balance Sheet ─────────────────────────────────────────────────────────
    document.getElementById("report-asset-detail").innerHTML  = detailLines(buckets.Asset);
    document.getElementById("report-liab-detail").innerHTML   = detailLines(buckets.Liability);
    document.getElementById("report-equity-detail").innerHTML = detailLines(buckets.Equity);

    const totalEquityWithProfit = totals.Equity + profit;
    document.getElementById("report-assets").textContent = formatCurrency(totals.Asset);
    document.getElementById("report-liab").textContent   = formatCurrency(totals.Liability);
    document.getElementById("report-equity").textContent = formatCurrency(totalEquityWithProfit);

    // Accounting equation check: Assets = Liabilities + Equity
    const diff = totals.Asset - (totals.Liability + totalEquityWithProfit);
    const bsCheck = document.getElementById("bs-check");
    if (bsCheck) {
        if (Math.abs(diff) < 0.01) {
            bsCheck.innerHTML = "<span>✓ Balance Sheet is Balanced</span><span style='color:var(--success)'>✓</span>";
            bsCheck.style.color = "var(--success)";
        } else {
            bsCheck.innerHTML = `<span>⚠ Difference</span><span style='color:var(--danger)'>${formatCurrency(Math.abs(diff))}</span>`;
            bsCheck.style.color = "var(--danger)";
        }
    }
}

function detailLines(bucket) {
    return Object.entries(bucket)
        .filter(([, v]) => v !== 0)
        .map(([name, val]) => `
            <div class="report-line">
                <span style="color:var(--text-muted);font-size:.85rem">${name}</span>
                <span>${formatCurrency(val)}</span>
            </div>`).join('');
}

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function formatCurrency(n) {
    const num = parseFloat(n) || 0;
    return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showSuccessToast(msg) {
    const toast = document.createElement("div");
    toast.textContent = "✓ " + msg;
    Object.assign(toast.style, {
        position: "fixed", bottom: "24px", right: "24px",
        background: "#065f46", color: "white",
        padding: "12px 24px", borderRadius: "8px",
        fontWeight: "600", fontSize: "0.9rem",
        zIndex: "9999", boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        animation: "fadeIn .3s ease"
    });
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
window.onload = () => {
    // Set today's date as default
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("entry-date");
    if (dateInput) dateInput.value = today;

    addNewLine();
    addNewLine();
    renderDashboard();
};
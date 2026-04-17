// 1. Chart of Accounts (Using your actual Excel codes)
const chartOfAccounts = {
    // --- Assets ---
    "101001": { name: "Fixed Assets - Refrigerators", category: "Asset" },
    "101001001": { name: "Fixed Assets - Refrigerators 1", category: "Asset" },
    "101001002": { name: "Fixed Assets - Refrigerators 2", category: "Asset" },
    "101001003": { name: "Fixed Assets - Refrigerators 3", category: "Asset" },

    "101002": { name: "Fixed Assets - Compressors", category: "Asset" },
    "101002001": { name: "Fixed Assets - Compressor 1", category: "Asset" },

    "101003": { name: "Fixed Assets - Computers & Printers", category: "Asset" },
    "101003001": { name: "Laptop", category: "Asset" },
    "101003002": { name: "Desktop", category: "Asset" },

    "101004": { name: "Fixed Assets - Packaging Machines", category: "Asset" },
    "101005": { name: "Fixed Assets - Electronic Scale", category: "Asset" },

    "102001001": { name: "Bank Account - EGP", category: "Asset" },
    "102001002": { name: "Bank Account - USD", category: "Asset" },
    "102001004": { name: "Cash in Box", category: "Asset" },

    "103001001": { name: "Accounts Receivable", category: "Asset" },

    // --- Liabilities ---
    "201001001": { name: "Accounts Payable - Suppliers", category: "Liability" },
    "202001001": { name: "Short-term Loans", category: "Liability" },
    "203001001": { name: "Accrued Salaries", category: "Liability" },

    // --- Equity ---
    "301001001": { name: "Capital Stock", category: "Equity" },
    "302001001": { name: "Retained Earnings", category: "Equity" },

    // --- Revenue ---
    "401001001": { name: "Sales Revenue - Dates", category: "Revenue" },
    "401001002": { name: "Sales Revenue - Wholesale", category: "Revenue" },
    "402001001": { name: "Service Revenue", category: "Revenue" },

    // --- Expenses ---
    "501001001": { name: "Rent Expense", category: "Expense" },
    "501001002": { name: "Electricity & Water Expense", category: "Expense" },
    "502001016": { name: "General Expenses - Tips", category: "Expense" },
    "503001001": { name: "Marketing & Advertising", category: "Expense" },
    "504001001": { name: "Salaries Expense", category: "Expense" }
};


// --- NAVIGATION LOGIC ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Auto-calculate if moving to certain pages
    if(pageId === 'reports-page') calculateReports();
    if(pageId === 'journal-page') renderJournal();
}

// --- DATA LOGIC ---
function getData() { return JSON.parse(localStorage.getItem("pro_audit_db")) || []; }
function saveData(data) { localStorage.setItem("pro_audit_db", JSON.stringify(data)); }

// --- DYNAMIC ENTRY LOGIC (As requested from video/excel) ---
function addNewLine() {
    const tbody = document.getElementById("entry-rows");
    const rowId = Date.now() + Math.random();
    const tr = document.createElement("tr");
    tr.id = `row-${rowId}`;
    tr.innerHTML = `
        <td><input type="text" class="row-code" onchange="updateRowName(this, '${rowId}')"></td>
        <td><span class="row-name-text" id="name-${rowId}">-</span></td>
        <td><input type="number" class="row-debit" value="0" onchange="validateJournalBalance()"></td>
        <td><input type="number" class="row-credit" value="0" onchange="validateJournalBalance()"></td>
        <td><button onclick="document.getElementById('row-${rowId}').remove(); validateJournalBalance();">❌</button></td>
    `;
    tbody.appendChild(tr);
}

function updateRowName(input, rowId) {
    const code = input.value;
    const nameSpan = document.getElementById(`name-${rowId}`);
    if(chartOfAccounts[code]) {
        nameSpan.innerText = chartOfAccounts[code].name;
        nameSpan.style.color = "#27ae60";
    } else {
        nameSpan.innerText = "Unknown Code";
        nameSpan.style.color = "#e74c3c";
    }
    validateJournalBalance();
}

function validateJournalBalance() {
    let deb = 0, cre = 0;
    document.querySelectorAll(".row-debit").forEach(i => deb += Number(i.value));
    document.querySelectorAll(".row-credit").forEach(i => cre += Number(i.value));
    
    const diff = deb - cre;
    const indicator = document.getElementById("entry-balance-status");
    indicator.innerText = `Balance: ${diff.toFixed(2)}`;
    indicator.style.background = (diff === 0 && deb > 0) ? "#27ae60" : "#e74c3c";
    return (diff === 0 && deb > 0);
}

function postJournalEntry() {
    if(!validateJournalBalance()) {
        alert("Entry must be balanced (Debit = Credit) and not zero!");
        return;
    }
    const data = getData();
    const date = document.getElementById("entry-date").value;
    const jNo = document.getElementById("journal-no").value;

    document.querySelectorAll("#entry-rows tr").forEach(row => {
        const code = row.querySelector(".row-code").value;
        const deb = Number(row.querySelector(".row-debit").value);
        const cre = Number(row.querySelector(".row-credit").value);

        if(deb > 0 || cre > 0) {
            data.push({
                date, journalNo: jNo, code,
                name: chartOfAccounts[code].name,
                category: chartOfAccounts[code].category,
                type: deb > 0 ? "Debit" : "Credit",
                amount: deb > 0 ? deb : cre
            });
        }
    });
    saveData(data);
    alert("Transaction Posted!");
    location.reload();
}

// --- REPORTS & TABLES LOGIC ---
function renderJournal() {
    const data = getData();
    document.getElementById("journal-rows").innerHTML = data.map(e => `
        <tr>
            <td>${e.date}</td><td>${e.journalNo}</td><td>${e.code}</td>
            <td>${e.name}</td><td>${e.type}</td><td>$${e.amount}</td>
        </tr>`).join('');
}

function generateTrialBalance() {
    const data = getData();
    let deb = 0, cre = 0;
    data.forEach(e => {
        if(e.type === "Debit") deb += e.amount; else cre += e.amount;
    });
    document.getElementById("total-debit").innerText = `$${deb}`;
    document.getElementById("total-credit").innerText = `$${cre}`;
}

function calculateReports() {
    const data = getData();
    let r = { Asset:0, Liability:0, Equity:0, Revenue:0, Expense:0 };
    data.forEach(e => r[e.category] += e.amount);
    const profit = r.Revenue - r.Expense;

    document.getElementById("report-rev").innerText = `$${r.Revenue}`;
    document.getElementById("report-exp").innerText = `$${r.Expense}`;
    document.getElementById("report-profit").innerText = `$${profit}`;
    document.getElementById("report-assets").innerText = `$${r.Asset}`;
    document.getElementById("report-liab").innerText = `$${r.Liability}`;
    document.getElementById("report-equity").innerText = `$${r.Equity + profit}`;
}

// Start with some lines
window.onload = () => { addNewLine(); addNewLine(); };
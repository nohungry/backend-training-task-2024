// 題目 - 樂呵呵健身房
//樂呵呵健身房目前有 8 位會員

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let purchaseRecords = [];


function addPurchaseRecord(name, courses) {
    if(!members.includes(name) || isNaN(courses) || courses <= 0){
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
        return;
    }

    let unitPrice = 0;
    
    if (courses >= 1 && courses <= 10) {
        unitPrice = 1500;
    } else if (courses >= 11 && courses <= 20) {
        unitPrice = 1300;
    } else {
        unitPrice = 1100;
    }

    const totalPrice = courses * unitPrice;

    purchaseRecords.push({
        name: name,
        courses: courses,
        unitPrice: unitPrice,
        totalPrice: totalPrice,
    });

    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`);
}

// 測試案例
addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
// addPurchaseRecord("名稱", "課程數量");

function calculateTotalPrice() {
    let totalRevenue = 0;
    for (let record of purchaseRecords) {
      totalRevenue += record.totalPrice;
    }
    console.log(`目前總營業額為 ${totalRevenue} 元`);
  }

function filterNoPurchaseMember() {
    const purchasedMembers = new Set();
    for (const record of purchaseRecords) {
      purchasedMembers.add(record.name);
    }
  
    const noPurchaseMembers = members.filter(member => !purchasedMembers.has(member));
  
    console.log(`未購買課程的會員有：${noPurchaseMembers.join(", ")}`);
  }

calculateTotalPrice();
filterNoPurchaseMember()

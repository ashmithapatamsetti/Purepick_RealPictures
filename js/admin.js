/* PurePick Admin Dashboard */
const ADMIN_EMAILS=["admin@purepick.com","manager@purepick.com"];
const categoryImages={Fruits:"images/fruits.png",Vegetables:"images/vegetables.png",Dairy:"images/dairy.png",Bakery:"images/bakery.png",Snacks:"images/snacks.png",Beverages:"images/beverages.png",Staples:"images/rice.png","Personal Care":"images/toothpaste.png",Household:"images/dishwash.png"};
let inventory=JSON.parse(localStorage.getItem("purepickInventory")||"[]");

function currentAdminUser(){try{return JSON.parse(localStorage.getItem("purepickCurrentUser")||"null")}catch(e){return null}}
function isAdmin(){const u=currentAdminUser();return !!(u&&u.role==="admin"&&u.email&&ADMIN_EMAILS.includes(String(u.email).toLowerCase()))}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function money(v){return "₹"+Number(v||0).toLocaleString("en-IN",{maximumFractionDigits:0})}
function getOrders(){try{return JSON.parse(localStorage.getItem("purepickOrders")||"[]")}catch(e){return []}}
function getUsers(){try{return JSON.parse(localStorage.getItem("purepickUsers")||"[]")}catch(e){return []}}
function denyAdmin(){alert("This page is only for authorized PurePick administrators.");location.href="dashboard.html"}

function renderAdminDashboard(){
  if(!isAdmin()){denyAdmin();return}
  const orders=getOrders();
  const active=orders.filter(o=>o.status!=="Cancelled");
  const revenue=active.reduce((s,o)=>s+Number(o.total||0),0);
  const users=getUsers();
  document.getElementById("statOrders").textContent=orders.length;
  document.getElementById("statRevenue").textContent=money(revenue);
  document.getElementById("statCustomers").textContent=users.length;
  document.getElementById("statActive").textContent=active.length;
  document.getElementById("statAverage").textContent="Avg. "+money(active.length?revenue/active.length:0);
  document.getElementById("countPlaced").textContent=orders.filter(o=>o.status==="Order Placed").length;
  document.getElementById("countProcessing").textContent=orders.filter(o=>o.status==="Processing").length;
  document.getElementById("countDelivered").textContent=orders.filter(o=>o.status==="Delivered").length;
  document.getElementById("countCancelled").textContent=orders.filter(o=>o.status==="Cancelled").length;
  document.getElementById("inventoryCountDashboard").textContent=inventory.length;
  renderOrdersTable(orders);
  renderInventory();
}

function renderOrdersTable(orders){
  const box=document.getElementById("adminOrders");
  if(!orders.length){box.innerHTML='<div class="empty"><h2>No orders yet</h2><p>When a customer places an order, the customer, delivery address, items and payment amount will appear here.</p></div>';return}
  const sorted=orders.slice().reverse();
  box.innerHTML=`<div class="admin-order-list">${sorted.map(o=>{
    const a=o.address||{};
    const customer=o.customerName||a.name||"Customer";
    const email=o.customerEmail||"Not recorded";
    const items=(o.items||[]).map(i=>`${escapeHtml(i.name)} (${escapeHtml(i.packLabel||"1 unit")}) × ${Number(i.qty||1)}`).join(", ");
    const status=o.status||"Order Placed";
    const statusClass=status.toLowerCase().replace(/[^a-z]+/g,"-");
    return `<article class="admin-order-card">
      <div class="admin-order-top"><div><span class="eyebrow">ORDER</span><h3>#${escapeHtml(o.id)}</h3><small>${escapeHtml(o.placedAt||"")}</small></div><span class="admin-status ${statusClass}">${escapeHtml(status)}</span></div>
      <div class="admin-order-grid">
        <div><span>Customer</span><b>${escapeHtml(customer)}</b><small>${escapeHtml(email)}</small></div>
        <div><span>Amount</span><b>${money(o.total)}</b><small>${escapeHtml(o.date||"")} • ${escapeHtml(o.time||"")}</small></div>
        <div class="admin-address"><span>Delivery address</span><b>${escapeHtml([a.line,a.city,a.pin,a.state].filter(Boolean).join(", ")||"No address recorded")}</b><small>${a.phone?"📞 "+escapeHtml(a.phone):""}${a.landmark?" • 📍 "+escapeHtml(a.landmark):""}</small></div>
        <div class="admin-items"><span>Items</span><b>${items||"No items recorded"}</b></div>
      </div>
      <div class="admin-order-actions"><label>Update status <select onchange="updateOrderStatus('${escapeHtml(String(o.id))}',this.value)"><option ${status==="Order Placed"?"selected":""}>Order Placed</option><option ${status==="Processing"?"selected":""}>Processing</option><option ${status==="Out for Delivery"?"selected":""}>Out for Delivery</option><option ${status==="Delivered"?"selected":""}>Delivered</option><option ${status==="Cancelled"?"selected":""}>Cancelled</option></select></label><a class="secondary-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([a.line,a.city,a.pin,a.state,a.landmark].filter(Boolean).join(", "))}">📍 View location</a></div>
    </article>`;
  }).join("")}</div>`;
}

function updateOrderStatus(id,status){
  if(!isAdmin()){denyAdmin();return}
  const orders=getOrders();const o=orders.find(x=>String(x.id)===String(id));if(!o)return;
  o.status=status;
  o.updatedAt=new Date().toLocaleString();
  localStorage.setItem("purepickOrders",JSON.stringify(orders));
  renderAdminDashboard();
}

function safeImg(src,fallback){return src||fallback||"images/product-generic.png"}
function renderInventory(){
  const box=document.getElementById("inventory");if(!box)return;
  if(!inventory.length){box.innerHTML='<div class="empty">No custom products yet.</div>';return}
  box.innerHTML=inventory.map((p,i)=>`<div class="inventory-row"><div><b>${escapeHtml(p.name)}</b><small class="muted">${escapeHtml(p.category)}</small></div><span>${money(p.price)}</span><img src="${safeImg(p.img,categoryImages[p.category])}" onerror="this.onerror=null;this.src='images/product-generic.svg'" alt="${escapeHtml(p.name)}"><button class="delete-btn" onclick="del(${i})">Delete</button></div>`).join("")
}
function addProduct(){
  if(!isAdmin()){denyAdmin();return}
  const name=document.getElementById("productName").value.trim(),price=Number(document.getElementById("productPrice").value),category=document.getElementById("productCategory").value,url=document.getElementById("productImage").value.trim(),file=document.getElementById("productImageFile");
  if(!name||!price||price<1){alert("Enter a valid product name and price.");return}
  const finish=img=>{inventory.push({id:Date.now(),name,price,category,img:safeImg(img,categoryImages[category]),packs:[{label:"1 unit",multiplier:1},{label:"Pack of 2",multiplier:2},{label:"Pack of 6",multiplier:6}]});localStorage.setItem("purepickInventory",JSON.stringify(inventory));renderAdminDashboard();document.getElementById("productName").value="";document.getElementById("productPrice").value="";document.getElementById("productImage").value="";document.getElementById("productImageFile").value="";alert(name+" added successfully.")};
  if(file&&file.files&&file.files[0]){const reader=new FileReader();reader.onload=e=>finish(e.target.result);reader.readAsDataURL(file.files[0])}else finish(url)
}
function del(i){if(!isAdmin()){denyAdmin();return}if(confirm("Remove this product from inventory?")){inventory.splice(i,1);localStorage.setItem("purepickInventory",JSON.stringify(inventory));renderAdminDashboard()}}

document.addEventListener("DOMContentLoaded",()=>{if(isAdmin())renderAdminDashboard();else denyAdmin()});

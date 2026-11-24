const baseProducts=[
{id:1,name:"Fresh Apples",category:"Fruits",price:180,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://i5.walmartimages.com/seo/Fresh-Envy-Apples-Each_32451a10-0563-426a-9a16-a8865b2c3774_3.b3be01fcc4c956f51fe3890589897d31.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573"},
{id:2,name:"Bananas",category:"Fruits",price:60,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://i5.walmartimages.com/asr/3bbb1151-d69a-43fb-b132-47e0bc066307.1f28c1acf3df725a6a39ba4c8738e025.jpeg?odnBg=FFFFFF&odnHeight=612&odnWidth=612"},
{id:3,name:"Oranges",category:"Fruits",price:100,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://i5.walmartimages.com/seo/Fresh-Navel-Orange-Each_a134f2a1-2bb0-4e5c-a594-f84b63ab5928.22241f295458186b2ba0e4ed7d460d52.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573"},
{id:4,name:"Grapes",category:"Fruits",price:120,packs:[{label:"250 g",multiplier:0.25},{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1}],img:"https://i5.walmartimages.com/seo/Marketside-Fresh-Seedless-Grapes-10-oz_74df5c98-a967-4055-b0da-64e9faf5f1ff.56d3d6f9cb4c9671335e987ee0b09f7b.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573"},
{id:5,name:"Carrots",category:"Vegetables",price:50,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://i5.walmartimages.com/seo/Fresh-Carrots-2-lb-Bag_dc63fcc2-db9e-40ca-ae4a-c3b322f897af.380c6889d0f01d88aa209384026eb1e7.png?odnBg=FFFFFF&odnHeight=573&odnWidth=573"},
{id:6,name:"Broccoli",category:"Vegetables",price:80,packs:[{label:"1 piece",multiplier:1},{label:"2 pieces",multiplier:2},{label:"4 pieces",multiplier:4}],img:"https://i5.walmartimages.com/seo/Freshly-Cut-Healthy-Broccoli-Bunch-1-Bunch_c5dec8ec-eebd-4fbb-9ffb-420e621b75a6.aea71634538634282f78440020f4ca54.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573"},
{id:7,name:"Tomatoes",category:"Vegetables",price:40,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_574,q_65,w_640/v1/clients/keithcountyne/tomators_643023f2-0e9a-4533-820b-ffb55e8e624c.jpg"},
{id:8,name:"Potatoes",category:"Vegetables",price:35,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85"},
{id:9,name:"Fresh Milk",category:"Dairy",price:60,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"https://www.starquik.com/cdn/shop/files/SQ103352_6e8d6708-1cc4-4a1d-8732-59cff27ab0e4.jpg?v=1751635106&width=416"},
{id:10,name:"Curd",category:"Dairy",price:70,packs:[{label:"200 g",multiplier:0.2},{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1}],img:"https://img.thecdn.in/330116/SKU-3139_0-1717742904134.jpg?format=webp&width=600"},
{id:11,name:"Cheese",category:"Dairy",price:150,packs:[{label:"200 g",multiplier:1},{label:"500 g",multiplier:2.25},{label:"1 kg",multiplier:4}],img:"https://theindianbazaarnj.com/image/8901262020039.jpg"},
{id:12,name:"Butter",category:"Dairy",price:58,packs:[{label:"100 g",multiplier:1},{label:"200 g",multiplier:2},{label:"500 g",multiplier:5}],img:"https://image.cdn.shpy.in/301135/SKU-0837_0-1751731928937.png?format=webp"},
{id:13,name:"Whole Wheat Bread",category:"Bakery",price:45,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"4 packs",multiplier:4}],img:"https://www.spencers.in/_next/image?q=75&url=https%3A%2F%2Fblaze-assets.webcdn.store%2Fcdn-cgi%2Fimage%2Fformat%3Dauto%2Cquality%3Dauto%2FImage_Update_New%2F1264586_1.png&w=1920"},
{id:14,name:"Cookies",category:"Snacks",price:80,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"6 packs",multiplier:6}],img:"https://www.foodrepublic.com/img/gallery/how-famous-amos-created-its-iconic-cookie/l-intro-1724061340.jpg"},
{id:15,name:"Potato Chips",category:"Snacks",price:50,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"6 packs",multiplier:6}],img:"https://www.desertcart.in/images/504765503.jpg"},
{id:16,name:"Milk Chocolate",category:"Snacks",price:50,packs:[{label:"1 bar",multiplier:1},{label:"Pack of 3",multiplier:3},{label:"Pack of 6",multiplier:6}],img:"https://cdn.powered-by-nitrosell.com/product_images/18/4273/large-cad.%20dairy%20milk%20120g.jpg"},
{id:17,name:"Biscuits",category:"Snacks",price:35,packs:[{label:"1 pack",multiplier:1},{label:"Pack of 3",multiplier:3},{label:"Pack of 6",multiplier:6}],img:"https://www.britannia.co.in/wp-content/uploads/2024/02/NutriChoice-Digestive.jpg"},
{id:18,name:"Orange Juice",category:"Beverages",price:110,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"https://img.clevup.in/285171/SKU-1658_0-1765104880639.jpg?format=webp&width=600"},
{id:19,name:"Mango Juice",category:"Beverages",price:120,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"https://regalplus.com/cdn/shop/files/RealMango.jpg?v=1736524658&width=900"},
{id:20,name:"Apple Juice",category:"Beverages",price:130,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1}],img:"https://www.starquik.com/cdn/shop/files/SQ105019_FOP_ba79e10b-8f97-4afa-9b72-e4bbeba011ee.jpg?v=1776846885"},
{id:21,name:"Mineral Water",category:"Beverages",price:20,packs:[{label:"500 ml",multiplier:1},{label:"1 litre",multiplier:2},{label:"2 litres",multiplier:4}],img:"https://www.princeofficesolutions.com/media/catalog/product/cache/bfd136ef890b09dfcd853feb466b1a68/p/o/pos1442_1.png"},
{id:22,name:"Basmati Rice",category:"Staples",price:120,packs:[{label:"1 kg",multiplier:1},{label:"5 kg",multiplier:5},{label:"10 kg",multiplier:10}],img:"https://www.pobara.com/image/cache/catalog/India-Gate-Basmati-Rice-Tibar-1kg-800x800.jpg"},
{id:23,name:"Wheat Flour",category:"Staples",price:55,packs:[{label:"1 kg",multiplier:1},{label:"5 kg",multiplier:5},{label:"10 kg",multiplier:10}],img:"https://srinavagourmet.es/cdn/shop/files/Atta_5_kg_aashir.png?v=1777471671&width=1445"},
{id:24,name:"Toor Dal",category:"Staples",price:170,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"https://tiimg.tistatic.com/fp/3/007/180/high-protein-toor-dal-1-kg-491.jpg"},
{id:25,name:"Sunflower Oil",category:"Staples",price:160,packs:[{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"https://naturessoulshop.com/cdn/shop/files/Sunflower-Oil-_E2_80_93-Glass-Bottle-_E2_80_93-MRT-Organics-_E2_80_93-500ml.jpg?v=1743191627&width=416"},
{id:26,name:"Tata Salt",category:"Staples",price:28,packs:[{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2},{label:"5 kg",multiplier:5}],img:"https://m.media-amazon.com/images/I/61-zRoFrfqL.jpg"},
{id:27,name:"Colgate Toothpaste",category:"Personal Care",price:95,packs:[{label:"100 g",multiplier:1},{label:"2 tubes",multiplier:2},{label:"3 tubes",multiplier:3}],img:"https://cdn01.pharmeasy.in/dam/products_otc/I12804/colgate-toothpaste-cibaca-80-g-anti-cavity-6.1-1669710159.jpg"},
{id:28,name:"Dishwash Liquid",category:"Household",price:110,packs:[{label:"500 ml",multiplier:1},{label:"1 litre",multiplier:2},{label:"2 litres",multiplier:4}],img:"https://www.starquik.com/cdn/shop/files/SQ108487_FOP_6d133ab5-06a2-4183-aac2-2f2c0a6eac05.jpg?v=1776847448"}
];
function realFallback(p){return p?.img||"images/product-generic.png"}
function defaultPacks(p){return p.packs||[{label:"1 unit",multiplier:1},{label:"Pack of 2",multiplier:2},{label:"Pack of 6",multiplier:6}]}
function getInventory(){return JSON.parse(localStorage.getItem("purepickInventory")||"[]").map((p,i)=>({...p,id:p.id||100000+i,img:p.img||realFallback(p),packs:defaultPacks(p)}))}
function getAllProducts(){return baseProducts.concat(getInventory())}
function getCart(){return JSON.parse(localStorage.getItem("purepickCart")||"[]")}
function saveCart(c){localStorage.setItem("purepickCart",JSON.stringify(c));updateCount()}
function updateCount(){document.querySelectorAll("#cartCount").forEach(e=>e.textContent=getCart().reduce((s,p)=>s+(p.qty||1),0))}
function selectedPack(id){const el=document.getElementById("pack-"+id);return el?Number(el.value):0}
function selectedQty(id){const el=document.getElementById("qty-"+id);return Math.max(1,Number(el.value)||1)}
function changeQty(id,delta){const el=document.getElementById("qty-"+id);if(!el)return;el.value=Math.min(99,Math.max(1,(Number(el.value)||1)+delta))}
function updateCardPrice(id){const p=getAllProducts().find(x=>x.id===id),sel=selectedPack(id);if(!p||!p.packs[sel])return;const price=Math.round(p.price*p.packs[sel].multiplier);const el=document.getElementById("unit-price-"+id);if(el)el.textContent="₹"+price}
function addToCart(id){if(typeof requireLogin==="function"&&!requireLogin())return;const p=getAllProducts().find(x=>x.id===id);if(!p)return;const packIndex=selectedPack(id),pack=p.packs[packIndex]||p.packs[0],qty=selectedQty(id),unitPrice=Math.round(p.price*pack.multiplier),key=id+"-"+pack.label;const c=getCart();const old=c.find(x=>x.key===key);if(old)old.qty=(old.qty||1)+qty;else c.push({...p,packLabel:pack.label,unitPrice,price:unitPrice,qty,key});saveCart(c);alert(qty+" × "+p.name+" ("+pack.label+") added to cart!")}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function viewProductImage(id){const p=getAllProducts().find(x=>x.id===id);if(!p)return;let modal=document.getElementById("pictureModal");if(!modal){modal=document.createElement("div");modal.id="pictureModal";modal.className="picture-modal";modal.innerHTML='<div class="picture-modal-backdrop" onclick="closeProductImage()"></div><div class="picture-modal-card"><button class="picture-close" onclick="closeProductImage()" aria-label="Close">×</button><img id="pictureModalImg" alt=""><h2 id="pictureModalTitle"></h2><p id="pictureModalCategory"></p></div>';document.body.appendChild(modal)}document.getElementById("pictureModalImg").src=p.img||realFallback(p);document.getElementById("pictureModalImg").onerror=()=>{document.getElementById("pictureModalImg").src=realFallback(p)};document.getElementById("pictureModalImg").alt=p.name;document.getElementById("pictureModalTitle").textContent=p.name;document.getElementById("pictureModalCategory").textContent=p.category;modal.classList.add("open")}
function closeProductImage(){const modal=document.getElementById("pictureModal");if(modal)modal.classList.remove("open")}
function card(p){
  const packs=defaultPacks(p), img=p.img||realFallback(p);
  return `<article class="product-card">
    <div class="product-image">
      <img src="${escapeHtml(img)}" data-product="${escapeHtml(JSON.stringify(p))}" alt="${escapeHtml(p.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=realFallback(JSON.parse(this.dataset.product))">
    </div>
    <div class="product-info">
      <span class="tag">${escapeHtml(p.category)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <button type="button" class="view-picture-btn" onclick="viewProductImage(${p.id})">View picture</button>
      <label class="option-label">Pack / size</label>
      <select class="pack-select" id="pack-${p.id}" onchange="updateCardPrice(${p.id})">${packs.map((x,i)=>`<option value="${i}">${escapeHtml(x.label)}</option>`).join("")}</select>
      <div class="product-buy-row">
        <div class="qty-control"><button type="button" onclick="changeQty(${p.id},-1)">−</button><input id="qty-${p.id}" type="number" min="1" max="99" value="1"><button type="button" onclick="changeQty(${p.id},1)">+</button></div>
        <span class="price" id="unit-price-${p.id}">₹${Math.round(p.price*packs[0].multiplier)}</span>
      </div>
      <button type="button" class="add-btn full-add" onclick="addToCart(${p.id})">+ Add to cart</button>
    </div>
  </article>`
}
function render(){const q=(document.getElementById("searchInput").value||"").toLowerCase();const cat=document.getElementById("categoryFilter").value;const list=getAllProducts().filter(p=>(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))&&(cat==="all"||p.category===cat));document.getElementById("productGrid").innerHTML=list.length?list.map(card).join(""):`<div class="empty" style="grid-column:1/-1">No products found.</div>`}
const params=new URLSearchParams(location.search);const initialCat=params.get("cat");const initialQ=params.get("q");if(initialCat)document.getElementById("categoryFilter").value=initialCat;if(initialQ)document.getElementById("searchInput").value=initialQ;document.getElementById("searchInput").addEventListener("input",render);document.getElementById("categoryFilter").addEventListener("change",render);render();updateCount();

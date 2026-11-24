function getCurrentUser(){
  try{return JSON.parse(localStorage.getItem("purepickCurrentUser")||"null")}catch(e){return null}
}
function isLoggedIn(){return !!getCurrentUser()}
function requireLogin(){
  if(isLoggedIn())return true;
  localStorage.setItem("purepickReturnUrl",location.href);
  alert("Please sign in before shopping. You can browse products without signing in.");
  location.href="login.html";
  return false;
}
function getCartCount(){return JSON.parse(localStorage.getItem("purepickCart")||"[]").reduce((s,p)=>s+(p.qty||1),0)}
function logout(){
  localStorage.removeItem("purepickUser");
  localStorage.removeItem("purepickCurrentUser");
  localStorage.removeItem("purepickLoggedIn");
  localStorage.removeItem("purepickReturnUrl");
  location.href="index.html";
}
function updateCommonUI(){
  document.querySelectorAll("#cartCount").forEach(e=>e.textContent=getCartCount());
  document.querySelectorAll("[data-auth-links]").forEach(box=>{
    const u=getCurrentUser();
    if(u){
      if(u.role === "admin"){
        box.innerHTML='<a href="admin.html">🛠️ Admin Dashboard</a><a href="javascript:logout()">Logout</a>';
      }else{
        box.innerHTML='<a href="dashboard.html">👤 My Account</a><a href="javascript:logout()">Logout</a>';
      }
    }else{
      box.innerHTML='<a href="login.html">Login</a><a href="signup.html">Sign In</a>';
    }
  });
}
function goSearch(){const el=document.getElementById("globalSearch")||document.getElementById("homeSearch")||document.getElementById("searchInput");const q=el?el.value.trim():"";location.href="products.html"+(q?"?q="+encodeURIComponent(q):"")}
document.addEventListener("DOMContentLoaded",updateCommonUI);

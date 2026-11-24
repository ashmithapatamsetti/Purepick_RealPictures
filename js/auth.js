// PurePick authentication and role-based redirects
// Demo admin accounts for review:
const ADMIN_ACCOUNTS = {
  "admin@purepick.com": "admin123",
  "manager@purepick.com": "manager123"
};

function getUsers(){
  try { return JSON.parse(localStorage.getItem("purepickUsers") || "[]"); }
  catch(e) { return []; }
}

function saveCurrentUser(user){
  const normalizedUser = {
    name: user.name || "PurePick User",
    email: String(user.email || "").toLowerCase(),
    role: user.role === "admin" ? "admin" : "user"
  };

  localStorage.setItem("purepickUser", JSON.stringify(normalizedUser));
  localStorage.setItem("purepickCurrentUser", JSON.stringify(normalizedUser));
  localStorage.setItem("purepickLoggedIn", "true");
  return normalizedUser;
}

function finishLogin(user){
  const currentUser = saveCurrentUser(user);

  // Admin always goes directly to the Admin Dashboard.
  if(currentUser.role === "admin"){
    localStorage.removeItem("purepickReturnUrl");
    location.href = "admin.html";
    return;
  }

  // Normal users go to their customer dashboard, unless they were
  // sent to login while trying to access a specific page.
  const returnUrl = localStorage.getItem("purepickReturnUrl");
  localStorage.removeItem("purepickReturnUrl");
  location.href = returnUrl || "dashboard.html";
}

// Sign Up: every newly created account is a normal customer account.
const sf = document.getElementById("signupForm");
if(sf) sf.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const p = document.getElementById("signupPassword").value;
  const c = document.getElementById("confirmPassword").value;

  if(p !== c){
    alert("Passwords do not match.");
    return;
  }

  // Prevent creating a customer account with an admin email.
  if(ADMIN_ACCOUNTS[email]){
    alert("This email is reserved for the PurePick administrator. Please use the Admin login credentials.");
    return;
  }

  const users = getUsers();

  if(users.some(u => String(u.email).toLowerCase() === email)){
    alert("This email is already registered. Please login.");
    return;
  }

  const user = {
    name,
    email,
    password: p,
    role: "user"
  };

  users.push(user);
  localStorage.setItem("purepickUsers", JSON.stringify(users));

  alert("Account created successfully!");
  finishLogin(user);
});

// Login: first check the configured admin accounts, then normal users.
const lf = document.getElementById("loginForm");
if(lf) lf.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pass = document.getElementById("loginPassword").value;

  // ADMIN LOGIN
  if(ADMIN_ACCOUNTS[email] && ADMIN_ACCOUNTS[email] === pass){
    alert("Admin login successful!");
    finishLogin({
      name: email === "admin@purepick.com" ? "PurePick Admin" : "PurePick Manager",
      email,
      role: "admin"
    });
    return;
  }

  // CUSTOMER LOGIN
  const user = getUsers().find(u =>
    String(u.email).toLowerCase() === email &&
    u.password === pass
  );

  if(!user){
    alert("Invalid email or password.");
    return;
  }

  // Existing accounts from older versions are treated as customers.
  user.role = "user";

  alert("Login successful!");
  finishLogin(user);
});

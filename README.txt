PUREPICK - CORRECTED WORKING VERSION

Run in VS Code:
1. Extract the ZIP.
2. Open the PurePick folder in VS Code.
3. Use Live Server and open index.html.

LOGIN / SIGN-IN
- Logged-out navigation shows Login and Sign In.
- Login and Sign In forms are functional.
- After login, navigation shows My Account and Logout.
- Logout removes all authentication state and returns to the home page.
- After logout, Login and Sign In appear again.
- Shopping/cart/order pages require a signed-in account.

PRODUCT IMAGES
- Built-in products use their real product-photo URLs.
- The old illustrated SVG fallback images are no longer used for built-in products.
- If a built-in photo cannot load, its own photo URL is retried instead of replacing it with an illustration.
- Admin-uploaded images remain supported.

ADMIN ACCESS
- Authorized demo emails: admin@purepick.com and manager@purepick.com.
- Admin access uses the currently signed-in account only.

NOTE
This is a frontend demonstration using browser LocalStorage, not a production backend/database.

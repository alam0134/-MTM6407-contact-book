# Quick Start Guide

## Getting Started in 30 Seconds

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:5173**

That's it! The application is ready to use.

---

## How to Use the Application

### 📱 Home Page (Contact List)
When you open the app, you'll see:
- **Search Bar** - Type a name to filter contacts
- **Contact Cards** - Click any card to view details
- **+ Add Contact Button** - Create a new contact

### ➕ Add a New Contact
1. Click **"+ Add Contact"** button (top right)
2. Fill in required fields:
   - First Name *
   - Last Name *
   - Email *
3. Optional fields:
   - Phone
   - Address
   - City
   - State
   - Zip Code
   - Notes
4. Click **"Save Contact"**
5. Automatically shows the new contact's details

### 👁️ View Contact Details
1. Click any contact card on the home page
2. See all contact information displayed
3. Two action buttons:
   - **✏️ Edit Contact** - Modify the information
   - **🗑️ Delete Contact** - Remove the contact

### ✏️ Edit a Contact
1. Click **"✏️ Edit Contact"** button
2. Modify any fields
3. Click **"Update Contact"**
4. Returns to the contact details page with updates

### 🗑️ Delete a Contact
1. Click **"🗑️ Delete Contact"** button
2. Confirm in the dialog
3. Contact is removed and you return to home page

### 🔍 Search Contacts
1. On the home page, use the search bar
2. Type first name or last name
3. Results update in real-time
4. Clear the search to see all contacts

---

## Key Features

✨ **What Makes This App Great:**
- ✅ No login required - everything works offline
- ✅ Data saved automatically to your browser
- ✅ No internet needed after first load
- ✅ Contacts auto-sorted by last name
- ✅ Beautiful, modern design
- ✅ Works on any device
- ✅ Fast and responsive

---

## Important Notes

📌 **Data Storage:**
- All contacts are stored in your browser's local storage
- Data persists even after closing the browser
- Clearing browser data will delete all contacts
- Each browser has its own separate contact database

⚠️ **Before Clearing Data:**
Clearing your browser's cache/cookies will delete all contacts. Make sure you don't need them first!

---

## Troubleshooting

### App won't start?
```bash
npm install
npm run dev
```

### Port 5173 already in use?
Vite will automatically use the next available port. Check the terminal for the actual URL.

### Lost all my contacts?
If you cleared your browser data, they're gone. Consider using the "Build for Production" feature to export your data.

### Search isn't working?
Try typing the exact first or last name (case-insensitive search is supported).

---

## Build for Production

To create an optimized version for deployment:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to deploy.

---

## Project Structure

```
-MTM6407-contact-book/
├── src/
│   ├── views/              # Page components
│   ├── router/             # Route configuration
│   ├── utils/              # Local storage functions
│   ├── App.vue            # Main app component
│   └── style.css          # Styling
├── index.html             # Page template
├── package.json           # Dependencies
└── README.md             # Full documentation
```

---

## Need Help?

Refer to:
- **README.md** - Full documentation
- **IMPLEMENTATION.md** - Technical details
- **CHECKLIST.md** - Requirements verification

---

**Happy organizing your contacts! 📇**

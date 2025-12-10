# Contact Book Web Application

A modern, single-page web application built with **Vue 3**, **Vue Router 4**, and **Vite** that allows users to manage their contacts efficiently.

## Features

✨ **Core Features:**
- **View Contacts**: Display all contacts in an attractive card-based layout
- **Alphabetical Sorting**: Contacts are automatically sorted by last name
- **Search/Filter**: Filter contacts by first name or last name in real-time
- **View Details**: Click on any contact to see all their information
- **Add Contact**: Create new contacts with first name, last name, email, and optional details
- **Edit Contact**: Update existing contact information
- **Delete Contact**: Remove contacts with confirmation
- **Local Storage**: All data persists in the browser's local storage

🎨 **UI/UX Features:**
- Beautiful gradient background with modern design
- Responsive layout that works on desktop, tablet, and mobile devices
- Smooth transitions and hover effects
- Contact avatars with initials
- Intuitive navigation with clear CTAs
- Empty state messaging

## Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components (routed views)
│   ├── ContactList.vue         # Home page with contacts list and search
│   ├── ContactDetails.vue      # Single contact details view
│   ├── AddContact.vue          # Form to add new contact
│   └── EditContact.vue         # Form to edit existing contact
├── router/             
│   └── index.js               # Vue Router configuration and routes
├── utils/
│   └── storage.js             # Local storage utilities
├── App.vue             # Root component
├── main.js             # Application entry point
├── style.css           # Global styles
└── index.html          # HTML template

public/                 # Static assets
node_modules/          # Dependencies
package.json           # Project configuration
vite.config.js         # Vite configuration
```

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend build tool
- **JavaScript (ES6+)** - Core language
- **CSS3** - Modern styling with gradients and flexbox/grid
- **Local Storage API** - Browser storage for persistence

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Usage

### Home Page (Contact List)
- View all contacts sorted alphabetically by last name
- Use the search bar to filter contacts by first or last name
- Click on any contact card to view their details
- Click the "+ Add Contact" button to create a new contact

### Contact Details
- View all information about a contact
- Click "✏️ Edit Contact" to modify the contact's information
- Click "🗑️ Delete Contact" to remove the contact (with confirmation)
- Click "← Back to Contacts" to return to the list

### Adding a Contact
- Fill in the required fields: First Name, Last Name, and Email
- Optionally add: Phone, Address, City, State, Zip Code, and Notes
- Click "Save Contact" to create the contact and view its details
- Click "Cancel" to return to the contact list without saving

### Editing a Contact
- Modify any of the contact's information
- Click "Update Contact" to save changes and view the updated contact details
- Click "Cancel" to discard changes and return to the contact details page

## Local Storage Schema

Contacts are stored in the browser's local storage under the key `contacts` as a JSON array:

```javascript
[
  {
    id: "1701234567890",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "555-1234",
    address: "123 Main St",
    city: "Springfield",
    state: "IL",
    zipCode: "62701",
    notes: "Important client",
    createdAt: "2024-12-10T10:30:00.000Z",
    updatedAt: "2024-12-10T14:15:00.000Z"
  }
]
```

## Component Details

### ContactList.vue
- Displays all contacts in a responsive grid
- Implements search functionality with real-time filtering
- Shows empty state when no contacts exist
- Sorts contacts alphabetically by last name

### ContactDetails.vue
- Shows complete contact information
- Provides navigation to edit the contact
- Implements delete functionality with confirmation dialog
- Back button to return to contact list

### AddContact.vue
- Comprehensive form for creating new contacts
- Includes validation for required fields (firstName, lastName, email)
- Responsive form layout
- Redirects to contact details view after successful creation

### EditContact.vue
- Pre-populated form with existing contact data
- Same fields as AddContact but with update functionality
- Maintains contact ID while updating information
- Returns to contact details view after successful update

## Routing

The application uses Vue Router with the following routes:

- `/` - Contact list (home page)
- `/contact/:id` - Contact details view
- `/add` - Add new contact form
- `/edit/:id` - Edit contact form

## Styling

The application uses a modern CSS approach with:
- CSS Grid for responsive layouts
- CSS Flexbox for alignment
- Linear gradients for visual appeal
- CSS transitions for smooth interactions
- Media queries for responsive design
- Hover effects for better UX

## Browser Support

This application works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Local Storage API
- Vue 3 and Vue Router 4

## Data Persistence

All data is stored in the browser's `localStorage` with the key `contacts`. This means:
- Data persists across browser sessions
- No backend server is required
- Data is stored locally on the user's device
- Clearing browser cache/storage will clear all contacts

## License

This project is created for educational purposes (MTM6407).

const STORAGE_KEY = 'contacts'

export function getContacts() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

export function addContact(contact) {
  const contacts = getContacts()
  const id = Date.now().toString()
  const newContact = { id, ...contact, createdAt: new Date().toISOString() }
  contacts.push(newContact)
  saveContacts(contacts)
  return newContact
}

export function updateContact(id, updatedData) {
  const contacts = getContacts()
  const index = contacts.findIndex(c => c.id === id)
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedData, updatedAt: new Date().toISOString() }
    saveContacts(contacts)
    return contacts[index]
  }
  return null
}

export function deleteContact(id) {
  const contacts = getContacts()
  const filtered = contacts.filter(c => c.id !== id)
  saveContacts(filtered)
  return filtered
}

export function getContactById(id) {
  const contacts = getContacts()
  return contacts.find(c => c.id === id)
}

export function searchContacts(query) {
  const contacts = getContacts()
  const lowerQuery = query.toLowerCase()
  return contacts.filter(
    c =>
      c.firstName.toLowerCase().includes(lowerQuery) ||
      c.lastName.toLowerCase().includes(lowerQuery)
  )
}

export function getSortedContacts() {
  const contacts = getContacts()
  return contacts.sort((a, b) => {
    const aLastName = a.lastName.toLowerCase()
    const bLastName = b.lastName.toLowerCase()
    return aLastName.localeCompare(bLastName)
  })
}

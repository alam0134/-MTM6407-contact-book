<template>
  <div class="contact-list">
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="Search by first or last name..."
      />
    </div>

    <div v-if="filteredContacts.length === 0" class="empty-state">
      <p class="empty-icon">📭</p>
      <p class="empty-text">
        {{ searchQuery ? 'No contacts found matching your search.' : 'No contacts yet. Add your first contact!' }}
      </p>
    </div>

    <div v-else class="contacts-grid">
      <router-link
        v-for="contact in filteredContacts"
        :key="contact.id"
        :to="`/contact/${contact.id}`"
        class="contact-card"
      >
        <div class="avatar">{{ getInitials(contact) }}</div>
        <div class="contact-info">
          <h3 class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</h3>
          <p class="contact-email">{{ contact.email }}</p>
          <p v-if="contact.phone" class="contact-phone">{{ contact.phone }}</p>
        </div>
        <div class="arrow">→</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getSortedContacts, searchContacts } from '../utils/storage'

const searchQuery = ref('')
const contacts = ref([])

onMounted(() => {
  contacts.value = getSortedContacts()
})

const filteredContacts = computed(() => {
  if (!searchQuery.value.trim()) {
    return contacts.value
  }
  return searchContacts(searchQuery.value).sort((a, b) => {
    const aLastName = a.lastName.toLowerCase()
    const bLastName = b.lastName.toLowerCase()
    return aLastName.localeCompare(bLastName)
  })
})

function getInitials(contact) {
  return (contact.firstName[0] + contact.lastName[0]).toUpperCase()
}
</script>

<style scoped>
.contact-list {
  max-width: 900px;
  margin: 0 auto;
}

.search-container {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
  min-width: 0;
}

.contact-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
}

.contact-email {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-phone {
  font-size: 0.85rem;
  color: #999;
}

.arrow {
  color: #667eea;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-text {
  font-size: 1.1rem;
  color: #666;
}

@media (max-width: 768px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 1rem;
  }
}
</style>

<template>
  <div v-if="contact" class="contact-details">
    <router-link to="/" class="back-btn">← Back to Contacts</router-link>

    <div class="details-container">
      <div class="avatar-large">{{ getInitials(contact) }}</div>

      <div class="info-section">
        <h1 class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</h1>

        <div class="details-grid">
          <div class="detail-item">
            <label>Email</label>
            <p>{{ contact.email }}</p>
          </div>

          <div v-if="contact.phone" class="detail-item">
            <label>Phone</label>
            <p>{{ contact.phone }}</p>
          </div>

          <div v-if="contact.address" class="detail-item">
            <label>Address</label>
            <p>{{ contact.address }}</p>
          </div>

          <div v-if="contact.city" class="detail-item">
            <label>City</label>
            <p>{{ contact.city }}</p>
          </div>

          <div v-if="contact.state" class="detail-item">
            <label>State</label>
            <p>{{ contact.state }}</p>
          </div>

          <div v-if="contact.zipCode" class="detail-item">
            <label>Zip Code</label>
            <p>{{ contact.zipCode }}</p>
          </div>

          <div v-if="contact.notes" class="detail-item full-width">
            <label>Notes</label>
            <p>{{ contact.notes }}</p>
          </div>
        </div>

        <div class="action-buttons">
          <router-link :to="`/edit/${contact.id}`" class="btn btn-primary">
            ✏️ Edit Contact
          </router-link>
          <button @click="deleteContactHandler" class="btn btn-danger">
            🗑️ Delete Contact
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Contact not found.</p>
    <router-link to="/" class="btn btn-primary">Back to Contacts</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getContactById, deleteContact } from '../utils/storage'

const router = useRouter()
const route = useRoute()
const contact = ref(null)

onMounted(() => {
  const id = route.params.id
  contact.value = getContactById(id)
})

function getInitials(contact) {
  return (contact.firstName[0] + contact.lastName[0]).toUpperCase()
}

function deleteContactHandler() {
  if (confirm('Are you sure you want to delete this contact?')) {
    const id = route.params.id
    deleteContact(id)
    router.push('/')
  }
}
</script>

<style scoped>
.contact-details {
  max-width: 700px;
  margin: 0 auto;
}

.back-btn {
  display: inline-block;
  margin-bottom: 2rem;
  color: white;
  font-weight: 600;
  transition: opacity 0.3s;
}

.back-btn:hover {
  opacity: 0.8;
  text-decoration: none;
}

.details-container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.contact-name {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
}

.info-section {
  text-align: left;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.detail-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-item label {
  display: block;
  font-weight: 600;
  color: #667eea;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.detail-item p {
  color: #333;
  margin: 0;
  word-break: break-word;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-danger {
  background: #ff6b6b;
  color: white;
}

.btn-danger:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.not-found {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #666;
}

@media (max-width: 768px) {
  .details-container {
    padding: 1.5rem;
  }

  .contact-name {
    font-size: 1.5rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>

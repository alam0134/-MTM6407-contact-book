<template>
  <div v-if="contact" class="edit-contact">
    <div class="form-container">
      <h1>Edit Contact</h1>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="firstName">First Name *</label>
          <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            required
            placeholder="Enter first name"
          />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name *</label>
          <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            required
            placeholder="Enter last name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email address"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input
            id="address"
            v-model="form.address"
            type="text"
            placeholder="Enter street address"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="city">City</label>
            <input
              id="city"
              v-model="form.city"
              type="text"
              placeholder="Enter city"
            />
          </div>

          <div class="form-group">
            <label for="state">State</label>
            <input
              id="state"
              v-model="form.state"
              type="text"
              placeholder="Enter state"
            />
          </div>

          <div class="form-group">
            <label for="zipCode">Zip Code</label>
            <input
              id="zipCode"
              v-model="form.zipCode"
              type="text"
              placeholder="Enter zip code"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="notes">Notes</label>
          <textarea
            id="notes"
            v-model="form.notes"
            placeholder="Enter any additional notes"
            rows="4"
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Update Contact</button>
          <router-link :to="`/contact/${contact.id}`" class="btn btn-secondary">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Contact not found.</p>
    <router-link to="/" class="btn btn-primary">Back to Contacts</router-link>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getContactById, updateContact } from '../utils/storage'

const router = useRouter()
const route = useRoute()
const contact = ref(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  notes: ''
})

onMounted(() => {
  const id = route.params.id
  const foundContact = getContactById(id)
  
  if (foundContact) {
    contact.value = foundContact
    Object.assign(form, foundContact)
  }
})

function submitForm() {
  const id = route.params.id
  const result = updateContact(id, form)
  if (result) {
    router.push(`/contact/${id}`)
  }
}
</script>

<style scoped>
.edit-contact {
  max-width: 600px;
  margin: 0 auto;
}

.form-container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.form-container h1 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.form-row .form-group {
  margin-bottom: 0;
}

label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

textarea {
  resize: vertical;
  font-family: inherit;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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
  text-align: center;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex: 1;
  min-width: 150px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #e0e0e0;
  color: #333;
  flex: 1;
  min-width: 150px;
}

.btn-secondary:hover {
  background: #d0d0d0;
  text-decoration: none;
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
  .form-container {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>

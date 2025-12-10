<template>
  <div id="app" class="app">
    <header class="header">
      <div class="container">
        <h1 class="title">📇 Contact Book</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">Contacts</router-link>
          <router-link to="/add" class="nav-link add-btn">+ Add Contact</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #667eea;
  font-weight: 600;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover {
  color: #764ba2;
  background: rgba(102, 126, 234, 0.1);
}

.nav-link.router-link-active {
  color: #764ba2;
  background: rgba(102, 126, 234, 0.2);
}

.add-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
}

.add-btn:hover {
  opacity: 0.9;
  background: linear-gradient(135deg, #5568d3 0%, #653a91 100%);
}

.main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  min-height: calc(100vh - 200px);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
  }

  .main {
    padding: 0 1rem;
  }
}
</style>

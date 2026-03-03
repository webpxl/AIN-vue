<!-- You do not have to change anything here. -->
<template>
  <div class="app">
    <header class="app-nav">
      <RouterLink to="/" class="nav-logo">
        <span class="logo-icon">◈</span>
        <span class="logo-text">CineSearch</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/" class="nav-link">Search</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 60px;
  background: rgba(12, 12, 15, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: .08em;
  color: var(--text);
}

.logo-icon {
  color: var(--accent);
  font-size: 20px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color .2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent);
}

.app-main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 32px 80px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .18s ease, transform .18s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>

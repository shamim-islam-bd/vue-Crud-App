<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/employee" class="nav-link">Employee</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/customers" class="nav-link">Customer</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/dashboard" class="nav-link"
                >Dashboard</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang=""></style>

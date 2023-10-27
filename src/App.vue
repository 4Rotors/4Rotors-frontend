<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row ms-0">
          <div class="col-4 d-flex align-items-center">
            <h4>4Rotors</h4>
          </div>
          <div class="col-7 d-flex justify-content-end">
            <div class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link to="/drones"
                        class="nav-link text-white">Парк дронов</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/orders"
                        class="nav-link text-white">Заказы</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/track"
                        class="nav-link text-white">Отслеживание</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 d-flex align-items-center">
            <button v-if="isToken" class="btn btn-outline-light">Выйти</button>
            <button v-else class="btn btn-outline-light">Войти</button>
          </div>
        </div>
      </div>
    </header>
    <div class="d-flex align-items-center">
      <router-view/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      isToken: false
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.view {
  margin: 0;
  padding: 0;
  width: 100%;
}

header {
  padding: 13px 0;
  background-color: #6b42ff;
  color: white;
  font-size: large;
}

body {
  background-color: white;
  width: 100%;
  height: 100vh;
  background-size: cover;
}

.bg-header-color {
  background-color: #6b42ff;
  border-radius: 5px;
}

.mask {
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
}

h4 {
  margin-top: 5px;
}
</style>

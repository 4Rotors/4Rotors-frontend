<template>
    <div class="container">
        <div class="row justify-content-center m-2">
            <div class="col-10">
                <p class="title text-center">Вход в систему</p>
            </div>
            <div class="row justify-content-center border-form">
                <div class="col-6 p-5 d-flex justify-content-center">
                    <form @submit.prevent="onLoginSubmit">
                        <div class="form-group row mb-2">
                            <label class="form-label col-3" for="login">Логин: </label>
                            <div class="col-9 ps-4">
                                <input class="form-control" type="text" v-model="login" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-label col-3" for="password">Пароль: </label>
                            <div class="col-9 ps-4">
                                <input class="form-control" type="password" v-model="password" />
                            </div>
                        </div>
                        <div class="row justify-content-center mt-6">
                            <div class="col-3 m-2">
                                <input class="btn btn-secondary" type="submit" value="Войти" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            login: '',
            password: '',

        }
    },
    methods: {
        onLoginSubmit() {

        }
    }
}
</script>

<style>
.title {
    font-size: 64px;
    font-weight: bold;
}

.btn-secondary {
    background-color: #6b42ff !important;
}

.border-form {
    border-color: black;
    border-width: medium;
    border-style: solid;
    border-radius: 10px;
}
</style>
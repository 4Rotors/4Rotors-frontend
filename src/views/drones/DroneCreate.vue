<template>
    <div class="container">
        <div class="row justify-content-center m-2">
            <div class="col-10">
                <p class="title text-center">Создание дрона</p>
            </div>
        </div>
        <div class="row justify-content-center border-form">
            <div class="col-12 p-5 d-flex justify-content-center">
                <form @submit.prevent="onLoginSubmit">
                    <label class="form-label" for="name">Название дрона </label>
                    <input class="form-control" type="text" v-model="name" />
                    <label class="form-label" for="capacity">Грузоподъемность </label>
                    <input class="form-control" type="text" v-model="capacity" />
                    <label class="form-label" for="distance">Дальность полета </label>
                    <input class="form-control" type="text" v-model="distance" />
                    <label class="form-label" for="type">Тип дрона </label>
                    <select class="form-select mb-2" v-model="type">
                        <option :value="воздушный">воздушный</option>
                        <option :value="наземный">наземный</option>
                    </select>
                    <div class="row justify-content-center mt-6">
                        <div class="col-3 m-2">
                            <input class="btn btn-secondary" type="submit" value="Создать" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DroneCreate',
    data() {
        return {
            name: '',
            charge: 0,
            capacity: 0,
            distance: 0,
            type: '',
            status: 'готов к вылету',
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
    border-color: #808080;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
}
</style>
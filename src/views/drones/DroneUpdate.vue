<template>
    <div class="container">
        <div class="row justify-content-center m-2">
            <div class="col-10">
                <p class="title text-center">Редактирование дрона</p>
            </div>
        </div>
        <div class="row justify-content-center border-form">
            <div class="col-12 p-5 d-flex justify-content-center">
                <form @submit.prevent="onUpdateDrone">
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
                            <input class="btn btn-secondary" type="submit" value="Редактировать" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DroneUpdate',
    data() {
        return {
            dron: {},
            name: '',
            capacity: 0,
            distance: 0,
            type: '',
        }
    },
    mounted() {
        const flag = false;
        if (flag) {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
            };

            axios.get(this.$url + 'drons/' + this.$router.id + '/', { headers })
                .then(response => this.dron = response.data);
        }
    },
    methods: {
        onUpdateDrone() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
            };
            const data = {
                name: this.name,
                distance: this.distance,
                capacity: this.capacity,
                type: this.type
            };

            // axios.patch(this.$url + 'drons/' + this.$router.id + '/', { headers })
                // .then(response => this.$router.push('/drones'));
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
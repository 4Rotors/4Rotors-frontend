<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Парк дронов</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 border-form p-2 me-5">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Фильтры</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Заряд:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="row justify-content-center">
                                <div class="col-5">
                                    <input placeholder="от" class="form-control" type="text" v-model="charge_from" />
                                </div>
                                <div class="col-5">
                                    <input placeholder="до" class="form-control" type="text" v-model="charge_to" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Грузоподъемность:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="row justify-content-center">
                                <div class="col-5">
                                    <input placeholder="от" class="form-control" type="text" v-model="capacity_from" />
                                </div>
                                <div class="col-5">
                                    <input placeholder="до" class="form-control" type="text" v-model="capacity_to" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Дальность полета:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="row justify-content-center">
                                <div class="col-5">
                                    <input placeholder="от" class="form-control" type="text" v-model="distance_from" />
                                </div>
                                <div class="col-5">
                                    <input placeholder="до" class="form-control" type="text" v-model="distance_to" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Статус:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="на зарядке" id="flexCheckChecked"
                                    v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">на зарядке</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="готов к вылету" id="flexCheckChecked"
                                    v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">готов к вылету</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="в процессе доставки"
                                    id="flexCheckChecked" v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">в процессе доставки</label>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Тип дрона:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="воздушный" id="flexCheckChecked"
                                    v-model="type">
                                <label class="form-check-label" for="flexCheckChecked">воздушный</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="наземный" id="flexCheckChecked"
                                    v-model="type">
                                <label class="form-check-label" for="flexCheckChecked">наземный</label>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12 d-flex justify-content-center">
                            <button @onClick="onFilterDrones" class="btn btn-secondary">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="col-5 border-form" style="height: 75vh; overflow: scroll;">
                    <Drone v-for="d in drones" v-bind:dron="d" />
                </div>

                <div class="col-3 border-form p-1 ms-5" style="height: 50vh;">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Поиск</p>
                        </div>
                    </div>
                    <form>
                        <div class="row ms-1">
                            <div class="col-12">
                                <p class="fw-medium" style="font-size: 24px;">По названию</p>
                            </div>
                        </div>
                        <div class="row ms-1">
                            <div class="col-10">
                                <input placeholder="от" class="form-control" type="text" v-model="name_search" />
                            </div>
                        </div>
                        <div class="row ms-1">
                            <div class="col-12">
                                <p class="fw-medium" style="font-size: 24px;">По номеру</p>
                            </div>
                        </div>
                        <div class="row ms-1">
                            <div class="col-10">
                                <input placeholder="от" class="form-control" type="text" v-model="id_search" />
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <button @onClick="onSearchDrones" class="btn btn-secondary">Найти</button>
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <router-link to="/drones/create" class="btn btn-secondary">Добавить дрон</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Drone from './Drone.vue';
import axios from 'axios';

export default {
    name: 'DronesList',
    components: {
        Drone
    },
    data() {
        return {
            drones: [
                {
                    id: 1,
                    name: 'DJI Mini 2 SE',
                    charge: 100,
                    capacity: 500,
                    distance: 1000,
                    type: "воздушный",
                    status: "готов к вылету",

                },
                {
                    id: 2,
                    name: 'DJI Mini 2 SE',
                    charge: 100,
                    capacity: 500,
                    distance: 1000,
                    type: "воздушный",
                    status: "готов к вылету",

                },
                {
                    id: 2,
                    name: 'DJI Mini 2 SE',
                    charge: 100,
                    capacity: 500,
                    distance: 1000,
                    type: "воздушный",
                    status: "готов к вылету",

                },
            ],
            charge_from: '',
            charge_to: '',
            capacity_from: '',
            capacity_to: '',
            distance_from: '',
            distance_to: '',
            status: '',
            type: '',
            name_search: '',
            id_search: '',
        }
    },
    mounted() {
        const flag = false;
        if (flag) {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.token,
            };

            axios.get(this.$url + 'api/drones', { headers })
                .then(response => this.drones = response.data);
        }
    },
    methods: {
        onFilterDrones(e) {
            if (this.charge_from !== '' && this.charge_to !== '') {
                this.drones.filter((drone) => drone.charge >= this.charge_from && drone.charge <= this.charge_to);
            }
            if (this.capacity_from !== '' && this.capacity_to !== '') {
                this.drones.filter((drone) => drone.capacity >= this.capacity_from && drone.capacity <= this.capacity_to);
            }
            if (this.distance_from !== '' && this.distance_to !== '') {
                this.drones.filter((drone) => drone.distance >= this.distance_from && drone.distance <= this.distance_to);
            }
            if (this.status !== '') {
                this.drones.filter((drone) => drone.status == this.status);
            }
            if (this.type !== '') {
            this.drones.filter((drone) => drone.type == this.type);
            }
        },
        onSearchDrones(e) {
            if (this.name_search !== '') {
                this.drones.filter((drone) => drone.name.match('/' + this.name_search + '/'));
            }
            if (this.id_search !== '') {
                this.drones.filter((drone) => drone.id == this.id_search);
            }
        },
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
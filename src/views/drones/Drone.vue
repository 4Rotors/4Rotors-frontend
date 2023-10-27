<template>
    <div class="row border-form m-2 p-1">
        <div class="col-6 d-flex align-items-center">
            <img alt="Dron" src="../../assets/dron.png">
        </div>
        <div class="col-6">
            <p class="fw-bold" style="font-size: 24px;">{{ dron.name }}(#{{ dron.id }})</p>
            <p style="font-size: 24px;">Заряд: {{ dron.charge }}%</p>
            <p style="font-size: 24px;">Грузоподъемность: {{ dron.capacity }} г</p>
            <p style="font-size: 24px;">Дальность полета: {{ dron.distance }} м</p>
            <p style="font-size: 24px;">Тип: {{ dron.type }} </p>
            <p style="font-size: 24px;">Текущий статус: {{ dron.status }} </p>
            <div class="col d-flex justify-content-center">
                <router-link class="btn btn-secondary" :to="'/drones/' + dron.id" v-bind:dron="dron">Редактировать</router-link>
            </div>
        </div>
    </div>
</div></template>

<script>
import axios from 'axios';

export default {
    name: 'Drone',
    props: ['dron'],
}
</script>


<style>
.btn-secondary {
    background-color: #6b42ff !important;
}
</style>
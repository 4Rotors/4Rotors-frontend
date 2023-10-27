<template>
    <div class="row border-form m-2 p-1">
        <div class="col-6">
            <img alt="Order Box" src="../../assets/order_box.png">
        </div>
        <div class="col-6">
            <p class="fw-bold">Номер заказа: {{ order.code }}(#{{ order.id }})</p>
            <p>Сумма: {{ order.sum }} р.</p>
            <p>Содержит товар: {{ order.item }}</p>
            <p>Статус: {{ order.status }}</p>
            <p>Масса: {{ order.weight }} г.</p>
            <!-- <p>Трек-номер: {{ order.track_number }}</p> -->
            <p v-if="drone.id">Дрон: {{ drone.name }}#({{ drone.id }})</p>
            <div v-if="!drone.id" class="row">
                <div class="col-12">
                    <button class="btn btn-secondary">Отправить заказ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'order',
    props: ['order'],
    data() {
        return {
            drone: {}
        }
    },
    methods: {
        onSendDrone(e) {
            
        }
    }
}
</script>

<style>
.btn-secondary {
    background-color: #6b42ff !important;
}

p {
    font-size: 24px;
}
</style>
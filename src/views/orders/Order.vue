<template>
    <div class="row border-form m-2 p-1">
        <div class="col-6">
            <img alt="Order Box" src="../../assets/order_box.png">
        </div>
        <div class="col-6">
            <p class="fw-bold" style="font-size: 24px;">Номер заказа: {{ order.code }}(#{{ order.id }})</p>
            <p style="font-size: 24px;">Сумма: {{ order.sum }} р.</p>
            <p style="font-size: 24px;">Содержит товар: {{ order.item }}</p>
            <p style="font-size: 24px;">Статус: {{ order.status }}</p>
            <p style="font-size: 24px;">Масса: {{ order.weight }} г.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order',
    props: ['order']
}
</script>

<style>
.btn-secondary {
    background-color: #6b42ff !important;
}
</style>
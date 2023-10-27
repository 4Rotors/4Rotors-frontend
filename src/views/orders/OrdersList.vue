<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Заказы</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 border-form p-2 me-5" style="height: 65vh;">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Фильтры</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Сумма:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="row justify-content-center">
                                <div class="col-5">
                                    <input placeholder="от" class="form-control" type="text" v-model="sum_from" />
                                </div>
                                <div class="col-5">
                                    <input placeholder="до" class="form-control" type="text" v-model="sum_to" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Название товара</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-10">
                            <input placeholder="название" class="form-control" type="text" v-model="name_filter" />
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Адрес доставки</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-10">
                            <input placeholder="адрес" class="form-control" type="text" v-model="address_filter" />
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
                                <input class="form-check-input" type="checkbox" value="GOING" id="flexCheckChecked"
                                    v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">ожидает погрузки на дрон</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="IN_DELIVERY" id="flexCheckChecked"
                                    v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">в пути с главного склада</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                    v-model="status">
                                <label class="form-check-label" for="flexCheckChecked">в пути к заказчику</label>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12 d-flex justify-content-center">
                            <button @onClick="onFilterOrders" class="btn btn-secondary">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="col-5 border-form" style="height: 75vh; overflow: scroll;">
                    <Order v-for="d in order" v-bind:order="d" />
                </div>

                <div class="col-3 border-form p-1 ms-5" style="height: 40vh;">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Поиск</p>
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
                            <button @onClick="onSearchOrders" class="btn btn-secondary">Найти</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import Order from './Order.vue';

export default {
    name: 'OrdersList',
    components: {
        Order
    },
    data() {
        return {
            order: [
                {
                    id: 1,
                    code: 'DJI4654JHH',
                    sum: 100,
                    item: "очки",
                    status: "Готов к транспортировке",
                    weight: 1000,
                },
                {
                    id: 1,
                    code: 'DJI4654JHH',
                    sum: 100,
                    item: "очки",
                    status: "Готов к транспортировке",
                    weight: 1000,
                },
                {
                    id: 1,
                    code: 'DJI4654JHH',
                    sum: 100,
                    item: "очки",
                    status: "Готов к транспортировке",
                    weight: 1000,
                },
            ],
            sum_from: '',
            sum_to: '',
            name_filter: '',
            address_filter: '',
            status: '',
            id_search: '',
        }
    },
    methods: {
        onFilterOrders(e) {
            if (this.sum_from !== '' && this.sum_to !== '') {
                this.order.filter((o) => o.sum >= this.sum_from && o.sum <= this.sum_to);
            }
            if (this.name_filter !== '') {
                this.order.filter((o) => o.name.match('/' + this.name_filter + '/'));
            }
            if (this.address_filter !== '') {
                this.order.filter((o) => o.address.match('/' + this.address_filter + '/'));
            }
            if (this.status !== '') {
                this.order.filter((o) => o.status == this.status);
            }
        },
        onSearchOrders(e) {
            if (this.id_search !== '') {
                this.order.filter((o) => o.id == this.id_search);
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
    border-color:
        #808080;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
}
</style>
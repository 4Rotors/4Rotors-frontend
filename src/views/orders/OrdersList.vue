<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Заказы</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 border-form p-2 me-5"  style="height: 65vh;">
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
                                    <input placeholder="от" class="form-control" type="text" v-model="login" />
                                </div>
                                <div class="col-5">
                                    <input placeholder="до" class="form-control" type="text" v-model="login" />
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
                            <input placeholder="название" class="form-control" type="text" v-model="login" />
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Адрес доставки</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-10">
                            <input placeholder="адрес" class="form-control" type="text" v-model="login" />
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">ожидает погрузки на дрон</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">в пути с главного склада</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">в пути к заказчику</label>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12 d-flex justify-content-center">
                            <button class="btn btn-secondary">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="col-5 border-form" style="height: 75vh; overflow: scroll;">
                    <Order v-for="d in order" v-bind:order="d" />
                </div>

                <div class="col-3 border-form p-1 ms-5"  style="height: 40vh;">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Поиск</p>
                        </div>
                    </div>
                    <form>
                        <div class="row ms-1">
                            <div class="col-12">
                                <p class="fw-medium" style="font-size: 24px;">По номеру</p>
                            </div>
                        </div>
                        <div class="row ms-1">
                            <div class="col-10">
                                <input placeholder="от" class="form-control" type="text" v-model="login" />
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <input type="submit" class="btn btn-secondary" value="Найти">
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <router-link to="/drones/create" class="btn btn-secondary">Создать доставку</router-link>
                            </div>
                        </div>
                    </form>
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
            ]
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
    border-color:
        #808080;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
}
</style>
<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Отслеживание доставок</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-8 border-form p-2 me-2" style="height: 75vh;">
                    <yandex-map :coords="coords" @click="onClick">
                        <ymap-marker markerId="123" :coords="coords"></ymap-marker>
                    </yandex-map>
                </div>

                <div class="col-3 border-form p-1 ms-4">
                    <div class="row ms-1">
                        <div class="col-12">
                            <p class="fw-bold" style="font-size: 24px;">Отслеживание по номеру</p>
                        </div>
                    </div>
                    <form>
                        <div class="row justify-content-center ms-1">
                            <div class="col-12">
                                <p class="fw-medium" style="font-size: 24px;">Введите трек-номер:</p>
                            </div>
                        </div>
                        <div class="row ms-1">
                            <div class="col-10">
                                <input class="form-control" type="text" v-model="track_number" />
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <input type="submit" class="btn btn-secondary" style="width: 100%;" value="искать">
                            </div>
                        </div>
                        <div class="row ms-1 mt-4">
                            <div class="col-10 d-flex justify-content-center">
                                <router-link to="/drones/create" style="width: 100%;" class="btn btn-secondary">обновить
                                    локацию</router-link>
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
    name: 'Track',
    data: () => ({
        coords: [54, 39],
        track_number: '',
    }),
    methods: {
        onClick(e) {
            this.coords = e.get('coords');
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
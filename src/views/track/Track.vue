<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Отслеживание доставок</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-8 border-form p-2 me-2" style="height: 72vh;">
                    <yandex-map style="width: 100%; height: 100%" v-if="true"
                        :coords="coords" @onClick="onClick"></yandex-map>
                </div>

                <div class="col-3 border-form p-1 ms-4" style="height: 40vh;">
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
                                <button  @onClick="onUpdateLocation" style="width: 100%;" class="btn btn-secondary">обновить
                                    локацию</button>
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
        coords: [55.099943, 50.706567],
        track_number: '',
    }),
    methods: {
        onClick(e) {
            this.coords = e.get('coords');
        },
        onGetTrackNumber(e) {

        },
        onUpdateLocation(e) {

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
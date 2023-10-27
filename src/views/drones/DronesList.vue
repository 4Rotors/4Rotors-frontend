<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-12">
                <p class="title text-center">Парк дронов</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 border-form p-1">
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
                            <p class="fw-medium" style="font-size: 24px;">Грузоподъемность:</p>
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
                            <p class="fw-medium" style="font-size: 24px;">Дальность полета:</p>
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
                    <div class="row ms-1 mt-1">
                        <div class="col-12">
                            <p class="fw-medium" style="font-size: 24px;">Статус:</p>
                        </div>
                    </div>
                    <div class="row ms-1">
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">на зарядке</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">готов к вылету</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">воздушный</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">наземный</label>
                            </div>
                        </div>
                    </div>
                    <div class="row ms-1 mt-1">
                        <div class="col-12 d-flex justify-content-center">
                            <button class="btn btn-secondary">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="col-6 border-form"></div>
                <div class="col-3 border-form"></div>
            </div>
        </div>
    </div>
</template>

<script>
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
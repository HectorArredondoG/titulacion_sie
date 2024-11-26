<script>

    import { link } from 'svelte-spa-router'

</script>

<main>

    <div class="d-flex justify-content-end">
        <a href="/Login" use:link><button type="button" class="btn btn acceso"> <strong> Iniciar Sesión </strong> </button> </a>
    </div>

    <div class="container banners">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./img/banner/slide14.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide15.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide16.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide17.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide18.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide19.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/banner/slide20.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</main>

<style>

    .acceso{
        background-color:#ff573e !important;
        color: white !important;
        margin-top: 10px;
        margin-right: 20px;
    }

</style>
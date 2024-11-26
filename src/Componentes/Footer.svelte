<script>

</script>

<main>

    <div class="footer">
        <div class="row">
            {#if screen.width >= 710}
                <div class="col">
                    <div class="contenedorLogos">
                        <img src="../../img/logo_escuela.png" alt="logoEscuela" class="logoEncrym">
                    </div>
                </div>
            {/if}
            <div class="col marginTop">
                <h4> Ubicacion y contactos: </h4>
                <a href="https://www.google.com/maps/place/ENCRyM+Escuela+Nacional+de+Conservaci%C3%B3n,+Restauraci%C3%B3n+y+Museograf%C3%ADa+%22Manuel+del+Castillo+Negrete%22/@19.3549402,-99.1525605,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffcc10c77569:0xc418dc7f46719667!8m2!3d19.3549402!4d-99.1503718?shorturl=1" target="_blank">General Anaya 187, Col. San Diego Churubusco 04120, Coyoacán, CDMX </a>
                <p> Tel: 55-4166-0770 </p>
                <p> Exts: 412118, 412123 o 412156 </p>
            </div>
            <div class="col marginTop">
                <h4> Enlaces externos: </h4>
                <a href="https://www.inah.gob.mx/" target="_blank" rel="noreferrer">INAH</a>
                <br>
                <a href="https://www.gob.mx/cultura" target="_blank">Cultura</a>
                <br>
                <a href="https://www.gob.mx/cultura" target="_blank">Radio INAH</a>
                <br>
                <a href="https://www.facebook.com/encrym" target="_blank"><i class="bi bi-facebook facebook" ></i></a>
                <a href="https://twitter.com/ENCRyM" target="_blank"><i class="bi bi-twitter-x twitter"></i></a>
                <a href="https://www.instagram.com/encrym/?hl=es-la" target="_blank"><i class="bi bi-instagram instagram"></i></a>
                <a href="https://www.youtube.com/channel/UClTX2TPWYP4jXsKiuZTo2oQ" target="_blank"><i class="bi bi-youtube youtube"></i></a>
            </div>
            <div class="col">
                <img src="../../img/logo_inah.png" alt="logoInah" class="logoInah">
            </div>
        </div>
        <h5> Encrym 2023 - Algunos Derechos Reservados </h5>
    </div>

</main>

<style>

    :root {
        max-width: 100%;
        max-height: 100%;
        margin: 0;
    }

    main {
        background: url(../../public/img/bannprinci.png);
        background-size: cover;
        font-weight: bold;
        margin-top: 5em;
    }

    .row {
        align-items: center;
    }

    .logoEncrym {
        max-width: 15em;
    }

    .logoInah {
        max-width: 30em;
        max-height: 7em;
        margin-left: 1em;
    }

    .footer {
        text-align: center;
        position: relative;
        bottom: 0;
        padding: 2em;
        height: 100%;
    }

    .marginTop {
        margin-top: 2em;
    }

    h4 {
        font-size: 1.5em;
        color: white !important;
    }

    h5 {
        color: black;
        font-weight: bold;
        font-size: 1em;
    }

    .col {
        display: block;
        justify-self: center;
        margin-right: 1.5em;
    }

    p {
        color: black;
    }

    a {
        color: white !important;
    }

    i {
        font-size: 2.5em;
        margin-top: 0.5em;
    }

    .facebook, .twitter, .instagram, .youtube {
        color: white;
    }

    .facebook:hover {
        transform: scale(1.25);
        color: blue;
    }

    .instagram:hover{
        transform: scale(1.25);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        border-radius: 0.4em;
    }

    .youtube:hover{
        transform: scale(1.25);
        color: red;
    }

</style>
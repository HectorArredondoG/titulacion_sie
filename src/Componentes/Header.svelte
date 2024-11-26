<script>

</script>

<main>

    <div class="header">
        <div class="logosheader">
            <img src="../../img/logo_escuela.png" alt="LogoENCRyM" class="logoENCRyM">
            {#if screen.width >= 860}
                <h1 id="sye"> SIENCRyM </h1>
            {/if}
            {#if screen.width >= 1240}
                <img src="../../img/logo_inah.png" alt="LogoINAH" class="logoInah">
            {/if}
        </div>
    </div>

</main>

<style>

    :root {
        max-width: 100%;
        max-height: 100%;
    }

    h1 {
        color: white;
        font-weight: 800;
        font-size: 7em;
    }

    .header {
        background: url(../../public/img/bannprinci.png);
        background-position: center;
        background-repeat: no-repeat;
    }

    .logosheader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logoENCRyM {
        max-width: 15em;
        margin-left: 2em;
    }

    .logoInah {
        max-width: 30em;
        max-height: 7em;
        margin-right: 2em;
    }

    @media (max-width: 1240px) {
        .logoInah {
            opacity: 0;
        }
        .logosheader {
            max-height: 120px;
            width: 100%;
        }
        .logoENCRyM {
            width: 12rem;
        }
    }

    @media (max-width: 860px) {
        #sye {
            opacity: 0;
        }
    }

</style>
<script>

    import Router from "svelte-spa-router";
    import routes from "./routes";
    import Footer from "./Componentes/Footer.svelte";
    import Header from "./Componentes/Header.svelte";

    if (window.location.hash !== '#/') {
        window.location.href = '?#' + window.location.hash.slice(1);
    }

</script>

<main>

    <Header />
    <Router {routes} />
    <Footer />

</main>

<style>

</style>
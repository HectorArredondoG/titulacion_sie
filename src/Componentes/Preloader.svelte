<div class="back_spinner">
    <div class="spinner"></div>
</div>

<style>

    .spinner {
        position: absolute;
        left: 46%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 8px solid rgb(255, 255, 255);
        border-top: 8px solid #Fb7d0c;
        border-bottom: 8px solid #Fb7d0c;
        animation: anime 1.4s ease infinite;
        z-index: 10000000000;
    }

    .back_spinner{
        width: 100%;
        height: 100%;
        background-color: rgba(98, 98, 98, 0.333);
        z-index: 10000000;
        position: absolute;
    }

    @keyframes anime {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .spinner::before {
        position: absolute;
        content: "";
        width: 200%;
        height: 200%;
        left: 50%;
        top: 50%;
        border-radius: inherit;
        opacity: 0.6;
        transform: translate(-50%, -50%);
        border: 10px solid rgb(255, 255, 255);
        border-left: 10px solid #Fb7d0c;
        border-right: 10px solid #Fb7d0c;
    }

    .spinner::after {
            position: absolute;
            content: "";
            width: 300%;
            height: 300%;
            left: 50%;
            top: 50%;
            border-radius: inherit;
            opacity: 0.6;
            transform: translate(-50%, -50%);
            border: 12px solid rgb(255, 255, 255);
            border-top: 12px solid #Fb7d0c;
            border-bottom: 12px solid #Fb7d0c;
    }

</style>
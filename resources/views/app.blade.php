<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <title>SITES</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="dist/styles.css"/>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
<app-root>
    <style>

        @keyframes moveup {
            0%, 60%, 100% {
                -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
            }
            25% {
                -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
            }
        }

        @-webkit-keyframes movedown {
            0%, 60%, 100% {
                -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
            }
            25% {
                -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
            }
        }

        .layer {
            display: block;
            position: absolute;
            height: 3em;
            width: 3em;
            box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
            -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg);
            transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg);
        }

        .layer:nth-of-type(1) {
            background: #534a47;
            margin-top: 1.5em;
            -webkit-animation: movedown 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.9s infinite normal;
            animation: movedown 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.9s infinite normal;
        }

        .layer:nth-of-type(1):before {
            content: '';
            position: absolute;
            width: 85%;
            height: 85%;
            background: #37332f;
        }

        .layer:nth-of-type(2) {
            background: #5a96bc;
            margin-top: 0.75em;
        }

        .layer:nth-of-type(3) {
            background: rgba(255, 255, 255, 0.6);
            -webkit-animation: moveup 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) infinite normal;
            animation: moveup 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) infinite normal;
        }

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    </style>
    <div id="preloader" class="container">
        <span style="margin-bottom: 85px;">Carregando...</span>
        <i class="layer"></i>
        <i class="layer"></i>
        <i class="layer"></i>
    </div>
</app-root>

<script type="text/javascript" src="dist/runtime.js"></script>
<script type="text/javascript" src="dist/polyfills.js"></script>
<script type="text/javascript" src="dist/scripts.js"></script>
<script type="text/javascript" src="dist/vendor.js"></script>
<script type="text/javascript" src="dist/main.js"></script>
</body>
</html>

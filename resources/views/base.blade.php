<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel App</title>
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="container">
        @yield('main') 
    </div>
    <script src="{{secure_asset('js/app.js')}}"></script>
</body>

</html>
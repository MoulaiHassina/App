<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="{{ sesure_asset('css/app.css') }}" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <div class="welcome">
            <div><a href="/contacts">Display Contacts</a></div>
            <div><a href="/contacts/create">Create new contact</a></div>
        </div>
    </body>
</html>

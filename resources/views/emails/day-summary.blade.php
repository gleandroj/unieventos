@component('mail::layout-custom')
    @component('mail::header', ['url' => config('app.url')])
        {{ config('app.name') }}
    @endcomponent
    @component('mail::markdown')
        # Resumo do dia

        Olá {{ $user->name }},
        Hoje temos a seguinte programação acontecendo no evento SITES na instituição:
    @endcomponent
    <div style="margin: 10px">
        {!! $programming->description !!}
    </div>
    @component('mail::markdown')
        Fique atento para não chegar atrasado,<br/>
        Atenciosamente,<br/>
        {{ config('app.name') }}<br/>
    @endcomponent
    @component('mail::footer')
        © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
    @endcomponent
@endcomponent

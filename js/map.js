$('#us2').locationpicker({
    zoom: 8,
    location: {
        latitude: 40.4376583,
        longitude: 48.5539051
    },
    radius: 0,
    inputBinding: {
        latitudeInput: $('#us2-lat'),
        longitudeInput: $('#us2-lon'),
        radiusInput: $('#us2-radius'),
        locationNameInput: $('#us2-address')
    },
    enableAutocomplete: true,
    enableAutocompleteBlur: true,
    autocompleteOptions: {
        types: ['(places)'],
    }
});


$('select').selectpicker();

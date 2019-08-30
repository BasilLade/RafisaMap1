// nimmt die Klasse Rooms und mit der each-Funktion wird jede Element des Typs Rooms aufgerufen.
$('.rooms').each(function () {

    // Füllt die Attribute mti der entsprechende Farbe.
    $(this).attr('fill', '#69abf4');

    // mit der Mouseover Funktion wird die Attribute entsprechend gefärbt durch die Reaktion der Cursor
    $(this).on('mouseover', function () {
        $(this).attr('fill', 'red');
    });

    // mit der Mouseout wird die entsprechende Farbe ausgeblendet.
    $(this).on('mouseout', function () {
        $(this).attr('fill', '#69abf4');
    });

    // beim Klicken auf das Room-Rechteck wird 
    $(this).on('click', function () {
        $.ajaxSetup({
            async: false
        });
        var message = 'Niemand';
        var roomId = $(this).attr('id');

        // mit dem Console-dir wird das Ergebnis in Konsole angezeigt
        //getPeople(room);
        $.getJSON("js/personen.json", function (rooms) {
            $.each(rooms, function (keyRoom, room) {
                if (roomId === keyRoom) {
                    $.each(room, function (keyField, fields) {
                        if (keyField === "persons") {
                            message = '';
                            $.each(fields, function (keyPerson, person) {
                                message += person.name + " " + person.familyName + '\n';
                            });
                        }
                    });
                }
            });
        });
        alert(message);
        $.ajaxSetup({
            async: true
        });
    });
});


// Funktion getPeople
function getPeople(room) {

    // Displays an interactive list
    console.dir(room);

    // Aus dem Id-Attribut werden die Attributen aufgerufen auf dem entsprechenden Rechteck
    switch (room) {

        // Rechteck mit dem entsprechenden ID
        case '_329_Saturn':

            // Alert-Texte wird im Konsole angezeigt
            alert('Erdem Erdembileg\nLaurin Birchler\nFlorian Plattner');
            break;

        case '_330_Abklaerung':
            alert('Lars Ragutt');
            break;

        // wenn nichts vorhanden ist
        default:
            alert('Niemand');
    }
}

function getToiletRooms(toiletroom) {
    console.dir(toiletroom);

    switch (toiletroom) {

        case 'WC_Herren':
            alert('WC Herren');
            break;

        case 'WC_Damen':
            alert('WC Damen');
            break;
        case 'Dusche':
            alert('Dusche');
            break;
        case 'WC_Ausbilder':
            alert('WC Ausbildern');
            break;
    }
}

$(document).ready(function () {
    $.ajaxSetup({
        async: false
    });
    console.dir('document ready');
    $.getJSON("js/personen.json", function (rooms) {
        var persons_data = '';
        $.each(rooms, function (keyRooms, room) {
            console.dir(room);
            $.each(room, function (fieldName, persons) {
                if (fieldName === 'persons') {
                    $.each(persons, function (personId, person) {
                        console.dir(person.name + " " + person.familyname);                    
                        var html = '<li><button type="button">';
                        html += person.familyName + " " + person.name;
                        html += '</button></li>';
                        $('#persons_content').append(html);
                    });
                }
            });
            console.dir('-----------------------------------------');
        });
    });
    $.ajaxSetup({
        async: true
    });
})
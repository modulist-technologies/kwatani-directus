(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-interfaces-nl-NL-interfaces-json"],{ab68:function(e){e.exports=JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"2FA Token"},"button-group":{"button_group":"Knop groep","choices":"Keuzes","choices_comment":"Voer key-value waardes in.","theme":"Interface Thema","theme_comment":"Stel het thema van de interface in indien ondersteund","value":"Waarde","flight":"Vlucht","cruise":"Cruise","run":"Hardlopen","bus":"Bus","bike":"Fiets","train":"Trein","car":"Auto","other":"Overige"},"calendar":{"calendar":"Kalender","min":"Minimale datum","min_comment":"Minimale datum die gekozen kan worden door de gebruiker","max":"Maximum datum","max_comment":"Maximale datum die gekozen kan worden door de gebruiker","formatting":"Datumnotatie","formatting_comment":"Volgens [Unicode Technical Standard](https://date-fns.org/v2.8.1/docs/format). Indien er niets is ingevuld wordt een relatieve datum gebruikt."},"checkboxes":{"checkboxes":"Vinkjes","choices":"Keuzes","choices_comment":"Voer key-value waardes in.","wrap":"Omring met komma","wrap_comment":"Slaat de waarde op in een extra setje komma\'s. Dit maakt het makkelijker om naar een specifieke waarde te zoeken in de Api.","formatting":"Toon tekst","formatting_comment":"Gebruik de waarde als label voor vinkje","display_text":"Weergavetekst","value":"Waarde","option":"Optie","single":"Enkele kolom","single_comment":"Toon selectievakjes in één kolom","draggable":"Versleepbare selectievakjes","draggable_comment":"Sleepbare selectievakjes inschakelen","allow_other":"Andere toestaan","allow_other_comment":"Laat de gebruiker een eigen waarde invoeren"},"checkboxes-relational":{"checkboxes_relational":"Selectievakjes (relatie)","grid":"Raster","grid_comment":"Aantal items die op een rij worden getoond","item_template":"Item sjabloon","item_template_comment":"Hoe waardes worden weergegeven op een rij","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"Weergave","listing_template_comment":"Hoe de waardes weer te geven.<br>Je moet de naam van de collectie aan het begin toevoegen","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"Code","template":"Sjabloon","template_comment":"Geef een sjabloon die de gebruiker kan gebruiken om mee te beginnen","language":"Taal","language_comment":"Stel de programmeertaal in om te gebruiken","lineNumber":"Regelnummer","lineNumber_comment":"Regelnummers weergeven","loc":"Geen regels van {lang} | Één regel van {lang} | {count} regels van {lang}","fill_template":"Met template vullen"},"collections":{"collections":"Collecties","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Statische tekst die wordt weergegeven voordat een waarde wordt geselecteerd","placeholder_default":"Kies een verzameling...","option":"Optie","include_system":"Systeem opnemen","include_system_comment":"Systeemcollecties opnemen in de opties"},"color":{"color":"Kleur","format":"Uitvoer format","format_comment":"In welk gegevensformaat moet de waarde worden opgeslagen","palette":"Palet","palette_comment":"Kleuropties als hex waarden toevoegen","palette_only":"Alleen palet","palette_only_comment":"Laat de gebruiker alleen kiezen uit het palet"},"color-palette":{"color-picker":"Kleurenkiezer"},"date":{"date":"Datum","min":"Minimale datum","min_comment":"Minimale datum die gekozen kan worden door de gebruiker","max":"Maximum datum","max_comment":"Maximale datum die gekozen kan worden door de gebruiker","localized":"Gelokaliseerd","localized_comment":"Toon de gelokaliseerde datum in de output","relative":"Relatieve datum weergeven","relative_comment":"Toon de datum relatief (bijvoorbeeld 2 dagen geleden)","icon_left":"Icoon links","icon_left_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","icon_right":"Icoon rechts","icon_right_comment":"Kies een optioneel pictogram om weer te geven aan de rechterkant van de invoer"},"datetime":{"datetime":"Datum/tijd","min":"Minimum tijdstip","min_comment":"Minimaal tijdstip die gekozen kan worden door de gebruiker","max":"Maximaal tijdstip","max_comment":"Minimaal tijdstip die gekozen kan worden door de gebruiker","localized":"Gelokaliseerd","localized_comment":"Toon de gelokaliseerde datum in de output","relative":"Relatieve tijd weergeven","relative_comment":"Toon de datum relatief (bijvoorbeeld 50 dagen geleden)","icon_left":"Icoon links","icon_left_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","icon_right":"Icoon rechts","icon_right_comment":"Kies een optioneel pictogram om weer te geven aan de rechterkant van de invoer","utc":"Opslaan als UTC","utc_comment":"Opslaan en weergeven vanuit UTC","default_to_current_datetime":"Standaard naar huidige datum/tijd","default_to_current_datetime_comment":"Stelt de standaard waarde in op de huidige datum/tijd","format":"Format","format_comment":"DateTime format te gebruiken voor de invoer"},"datetime-created":{"datetime_created":"Datum en tijd Aangemaakt","relative":"Relatieve tijd weergeven","relative_comment":"Toon de datum relatief (bijvoorbeeld 50 dagen geleden)","now":"U maakt dit nu","unknown":"Onbekend"},"datetime-updated":{"datetime_updated":"Datum en tijd Bijgewerkt","relative":"Relatieve tijd weergeven","relative_comment":"Toon de datum relatief (bijvoorbeeld 50 dagen geleden)","now":"U maakt dit nu","unknown":"Onbekend"},"divider":{"divider":"Scheidingslijn","style-name":"Scheidingslijn stijl","style-comment":"Pas de stijl van de scheidingslijn aan","weight-name":"Dikte van de lijn","weight-comment":"Dikte van de lijn wijzigen","input-name":"Scheidingslijn tekst","input-comment":"Voer hier je tekst in","desc-name":"Scheidingslijn omschrijving","desc-comment":"Een beschrijving toevoegen","hr-name":"HR","hr-comment":"Horizontale lijn invoegen","margin-name":"Extra margin","margin-comment":"Extra marge boven interface toevoegen"},"dropdown":{"dropdown":"Keuzemenu","choices":"Keuzes","choices_comment":"Voer key-value waardes in.","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Statische tekst die wordt weergegeven voordat een waarde wordt geselecteerd","option":"Optie","formatting":"Toon tekst","formatting_comment":"Gebruik de waarde als label voor vinkje","placeholder_default":"Kies een optie...","icon":"Icoon","icon_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","options_invalid":"De JSON opties voor de dropdown zijn ongeldig:","allow_other":"Andere toestaan","allow_other_comment":"Deze gebruiker kan zijn eigen waarde toevoegen"},"file":{"file":"Bestand","view_type":"Weergave Type","view_type_comment":"Selecteer op welke manier u de bestanden wilt bekijken","view_options":"Weergaveopties","view_options_comment":"Stel de te gebruiken weergave opties in voor de bestanden","view_query":"Weergave Query","view_query_comment":"Stel de te gebruiken weergave in voor de bestanden","filters":"Filters","filters_comment":"Welke filters te gebruiken","accept":"Accepteer bestandstypes","accept_comment":"Stel een lijst van MIME-types in die geselecteerd kunnen worden","allow_delete":"Verwijderen toestaan","allow_delete_comment":"Hiermee kan de gebruiker het gerelateerde bestand permanent verwijderen via de bestandsinterface","crop_preview":"Voorbeeld uitsnede bestand","crop_preview_comment":"Knipt de voorvertoning bij om de beschikbare ruimte te vullen."},"file-preview":{"file_preview":"Bestandsvoorvertoning","edit":"Bewerk opties"},"file-size":{"file_size":"Bestandsgrootte","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","format":"Formaat waarde","format_comment":"Toon de waarde op een menselijke leesbare manier (bijv. 10MB)","format_input":"Invoer opmaken","format_input_comment":"Voer de waarde in door een dropdown voor eenheden te gebruiken","decimal":"Decimaal","decimal_comment":"Toon de waarde als MiB in plaats van MB","crop_preview":"Afbeeldingen bijsnijden"},"files":{"files":"Bestanden","visible_columns":"Zichtbare kolommen","visible_columns_comment":"Voeg een CSV van kolommen toe die u wilt weergeven als voorbeeld","preferences":"Weergave voorkeuren","preferences_comment":"Kies de opties om te gebruiken voor het selecteren van bestanden","relation_not_setup":"De relatie is niet correct geconfigureerd","template":"Weergavesjabloon","template_comment":"Kies hoe waarden weergegeven moeten worden op de item lay-outs","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Aanmaken toestaan","allow_create_comment":"Sta de gebruiker toe om een nieuw item te maken uit deze interface","allow_select":"Selectie toestaan","allow_select_comment":"Laat de gebruiker een bestaand item selecteren","accept":"Accepteer bestandstypes","accept_comment":"Stel een lijst van MIME-types in die geselecteerd kunnen worden","edit_item":"Wijzig"},"hashed":{"hashed":"Hashed","hide":"Waarde verbergen","hide_comment":"Toon puntjes in plaats van de tekens die u invoert","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","show_hash":"Toon de gehashte uitvoer","show_hash_comment":"De opgeslagen hash weergeven","hashing_type":"Hashing Type","hashing_type_comment":"Welke manier van hashen te gebruiken","width":"Grootte","width_comment":"Welke breedte te gebruiken voor de invoer","auto":"Automatisch","small":"Klein","medium":"Medium","large":"Groot","secured":"Waarde Beveiligd"},"icon":{"icon":"Icoon","search_placeholder":"Zoek naar een icoon..."},"interface-options":{"interface-options":"Interface opties","interface-field":"Interface veld","placeholder-comment":"Het veld dat de naam van de interface bevat","placeholder-default":"Voer een veldnaam in..."},"interface-types":{"interface-types":"Interface types","interface-field":"Interface veld","placeholder-comment":"Het veld dat de naam van de interface bevat","placeholder-default":"Voer een veldnaam in..."},"interfaces":{"interfaces":"Interfaces","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Statische tekst die wordt weergegeven voordat een waarde wordt geselecteerd","placeholder_default":"Kies een interface","option":"Optie","relational":"Inclusief relationele interfaces","include_status":"Voeg de status interfaces toe"},"json":{"template":"Sjabloon","template_comment":"Geef een sjabloon die de gebruiker kan gebruiken om mee te beginnen"},"key-value":{"key_interface":"Key Interface","key_data_type":"Key Data Type","key_options":"Key Interface Opties","value_interface":"Key Interface","value_data_type":"Key Data Type","value_options":"Key Interface Opties"},"language":{"input":"Taal","select_language":"Selecteer een taal...","limit":"Limiteer tot Directus Beschikbaarheid","limit_comment":"Toon alleen talen die beschikbaar zijn als vertalingen in Directus"},"many-to-many":{"m2m":"Veel op Veel","visible_columns":"Zichtbare kolommen","visible_columns_comment":"Voeg een CSV van kolommen toe die u wilt weergeven als voorbeeld","preferences":"Weergave voorkeuren","preferences_comment":"Kies de opties om te gebruiken voor het selecteren van bestanden","relation_not_setup":"De relatie is niet correct geconfigureerd","template":"Weergavesjabloon","template_comment":"Kies hoe waarden weergegeven moeten worden op de item lay-outs","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Aanmaken toestaan","allow_create_comment":"Sta de gebruiker toe om een nieuw item te maken uit deze interface","allow_select":"Selectie toestaan","allow_select_comment":"Laat de gebruiker een bestaand item selecteren"},"many-to-one":{"m2o":"Veel op één","template":"Dropdown Template","template_comment":"How to format the dropdown options","visible_fields":"Zichtbare velden","visible_fields_placeholder":"titel,auteur","visible_fields_note":"CSV of fields visible when selecting an item in the modal","template_placeholder":"{{title}} — {{author}}","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","preferences":"Weergave voorkeuren","preferences_comment":"Kies de opties om te gebruiken voor het selecteren van bestanden","relationship_not_setup":"De relatie is niet correct geconfigureerd","icon":"Icoon","icon_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","select_one":"Selecteer een","threshold":"Drempelwaarde","threshold_comment":"Het aantal items waarna een modus wordt gebruikt in plaats van een uitklapbare modus"},"map":{"map":"Kaart","choices":"keuzes","choices_comment":"Voer key-value waardes in.","theme":"Interface Thema","theme_comment":"Stel het thema van de interface in indien ondersteund","value":"Waarde","map_lat":"Standaard breedtegraad","map_lat_comment":"Kaart wordt gecentreerd op deze breedtegraad","map_lng":"Standaard lengtegraad","map_lng_comment":"Kaart zal gecentreerd worden op deze lengtegraad","height":"Hoogte","default_zoom":"Standaard Zoom","default_zoom_comment":"Standaard zoomniveau van de kaart","max_zoom":"Maximale Zoom","max_zoom_comment":"Maximum zoom toegestaan op de kaart","no_location":"Geen locatie gevonden","user_location_error_blocked":"Je hebt de locatietoegang uitgeschakeld. Schakel deze in vanuit de browser adresbalk om je locatie automatisch te detecteren.","user_location_error":"Bij het uploaden van uw bestand is een fout opgetreden. Probeer het nogmaals.","address_to_code":"Adres invoer","address_to_code_comment":"Voeg een invoerveld toe om automatisch de geocodes van een adres te krijgen. Gebruikt <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. Controleer het gebruiksbeleid.","address_to_code_error":"Geen geocode gevonden voor dit adres","clear_location":"Locatie wissen","my_location":"Mijn locatie instellen","address_location":"Adreslocatie instellen"},"markdown":{"markdown":"Markdown","edit":"Wijzig","preview":"Voorvertoning","tabbed_preview":"Voorbeeld Tabbed","tabbed_preview_comment":"Hoe de bewerker en het voorbeeld weer te geven","tabbed_preview_on":"Voorbeeld Tabbed","tabbed_preview_off":"Voorbeeld aan de zijkant","rows":"Rijen","rows_comment":"Het beginaantal tekst rijen dat beschikbaar is","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in"},"multiselect":{"multiselect":"Multi-select","choices":"Keuzes","choices_comment":"Voer JSON sleutelwaarden in met de opgeslagen waarde en weergegeven tekst","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","size":"Grootte","size_comment":"Aantal zichtbare opties voordat de gebruiker moet scrollen","option":"Optie","wrap":"Omring met komma","wrap_comment":"Waarden ombouwen met een scheidingsteken om strikt te zoeken naar een enkele waarde","format":"Bladeren in format","format_comment":"Het uitvoerformat op de Blader Items pagina"},"numeric":{"numeric":"Nummer","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","localized":"Gelokaliseerd","localized_comment":"Lokaliseer de output naar de landinstelling van de gebruiker","icon_left":"Icoon links","icon_left_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","icon_right":"Icoon rechts","icon_right_comment":"Kies een optioneel pictogram om weer te geven aan de rechterkant van de invoer","monospace":"Monospace","monospace_comment":"Gebruik een monospace lettertype"},"one-to-many":{"o2m":"Één op veel","select_items":"Selecteer de items","relation_not_setup":"De relatie is niet correct geconfigureerd","visible_columns":"Zichtbare kolommen","visible_columns_comment":"Voeg een CSV van kolommen toe die u wilt weergeven als voorbeeld","preferences":"Weergave voorkeuren","preferences_comment":"Kies de opties om te gebruiken voor het selecteren van bestanden","template":"Weergavesjabloon","template_comment":"How to format value on the item browse display","template_placeholder":"{{title}} — {{author}}","allow_create":"Aanmaken toestaan","allow_create_comment":"Sta de gebruiker toe om een nieuw item te maken uit deze interface","allow_select":"Selectie toestaan","allow_select_comment":"Laat de gebruiker een bestaand item selecteren","delete_mode":"Verwijder modus","delete_mode_comment":"Wat te doen wanneer de gebruiker een item deselecteert","sort_field":"Sorteerveld","sort_field_comment":"Het veld om de sorteerwaarde in op te slaan"},"password":{"password":"Wachtwoord","hide":"Waarde verbergen","hide_comment":"Toon puntjes in plaats van de tekens die u invoert","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","confirm_placeholder":"Wachtwoord bevestigen...","show_hash":"Toon de gehashte uitvoer","show_hash_comment":"De opgeslagen hash weergeven","hashing_type":"Hashing Type","hashing_type_comment":"Welke manier van hashen te gebruiken"},"preview":{"preview":"Voorvertoning","url_template":"URL Template","url_template_comment":"A mustache template for a URL to preview content","preview_item":"Voorbeeldweergave"},"primary-key":{"primary_key":"Primary Key","immutable":"Kan niet worden gewijzigd","monospace":"Monospace","monospace_comment":"Gebruik een monospace lettertype"},"radio-buttons":{"radio":"Keuzerondjes","choices":"Keuzes","choices_comment":"Voer key-value waardes in.","option":"Optie","format":"Bladeren in format","format_comment":"Het uitvoerformat op de Blader Items pagina"},"rating":{"rating":"Beoordeling","value":"Waarde","active_color":"Actieve kleur","active_color_comment":"Actieve kleur van geselecteerde sterren","max_stars":"Maximaal aantal sterren","max_stars_comment":"Aantal maximale beoordeling toegestaan","display":"Toon","display_comment":"Hoe de beoordelingswaarden te tonen"},"repeater":{"repeater":"Herhaler","template":"Weergavesjabloon","template_comment":"How to format value on the item browse display and inline preview","template_placeholder":"{{title}} — ({{author}})","fields":"Velden","fields_comment":"What fields to show in each repeated row","limit":"Limiet","limit_comment":"Maximum amount of rows the user can add","duplicable":"Dubbele rijen","duplicable_comment":"Whether to make rows duplicable or not","structure":"Structuur","structure_comment":"Whether to save the JSON as an array of objects or single object with unique keys","structure_key":"Structure Key Field","structure_key_comment":"When using an object for the JSON structure, this value controls what field to use for the key values","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"De waarde die wordt weergegeven in plaats van de sjabloon als er nog geen waarde is ingevoerd","create_item_text":"Create Item Text","create_item_text_comment":"Text that\'s displayed in the button that adds a new row to the repeater"},"slider":{"slider":"Schuifregelaar","min":"Minimum","min_comment":"De minimale geldige waarde","max":"Maximum","max_comment":"De maximale geldige waarde","step":"Stap","step_comment":"Increments at which the value can be set","unit":"Eenheid","unit_comment":"Toon een eenheid naast de schuifregelaar, bijvoorbeeld 15 ponden"},"slug":{"slug":"Url","placeholder_name":"Tijdelijke plaatshouder","placeholder_comment":"De te tonen placeholder tekst","force_lowercase":"Forceer kleine letters","force_lowercase_comment":"Zorgt ervoor dat de slug in kleine letters is","mirrored_field":"Gespiegeld veld","mirrored_field_comment":"Keep the slug up to date with another (text) field","only_on_create":"Alleen bij aanmaken","only_on_create_comment":"Alleen toestaan dat de slug wordt bewerkt bij het aanmaken van een niew item"},"sort":{"sort":"Sorteer"},"status":{"status":"Status","status_mapping":"Status Mapping","status_mapping_comment":"Geef JSON statusopties op","simple_badge":"Simple Badge","simple_badge_comment":"Toont een gekleurde stip op de item lijst pagina.","published":"Gepubliceerd","under_review":"Wordt beoordeeld","draft":"Concept","deleted":"Verwijderd"},"tags":{"tags":"Tags","alphabetize":"Labels alfabetiseren","alphabetize_comment":"Tags herschikken naar alfabetische volgorde","lowercase":"Forceer kleine letters","lowercase_comment":"Alle labels omzetten naar kleine letters","wrap":"Omring met scheidingsteken","wrap_comment":"Waarden ombouwen met een scheidingsteken om strikt te zoeken naar een enkele waarde","format":"Formatteer waarde","format_comment":"Zet de tags om in Titel Case bij het weergeven van de waarde","sanitize":"Opschonen","sanitize_comment":"Verwijdert alle niet-alfanumerieke tekens en zet spaties om naar koppeltekens","placeholder_text":"Typ een label en druk vervolgens op enter of komma...","icon_left":"Icoon links","icon_left_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","icon_right":"Icoon rechts","icon_right_comment":"Kies een optioneel pictogram om weer te geven aan de rechterkant van de invoer","validation":"Validatie","validation_comment":"A RegEx to check each individual value against","validation_message":"Validatiemelding","validation_message_comment":"Een kort bericht om gebruikers te laten zien als de labelvalidatie mislukt","validation_message_default":"Voer een geldig label in alsjeblieft"},"text-input":{"input":"Tekstinvoer","placeholder":"Tijdelijke plaatshouder","trim":"Bijsnijden","trim_comment":"Knip omliggende witruimte van de waarde bij voor het opslaan","char_count":"Toon aantal tekens","char_count_comment":"Toon de resterende beschikbare karakters","icon_left":"Icoon links","icon_left_comment":"Kies een optioneel icoon om weer te geven aan de linkerkant van de invoer","icon_right":"Icoon rechts","icon_right_comment":"Kies een optioneel pictogram om weer te geven aan de rechterkant van de invoer","format":"Pretty Output","format_comment":"Converteer de waarde naar title case","monospace":"Monospace","monospace_comment":"Gebruik een monospace lettertype","auto":"Automatisch","small":"Klein","medium":"Medium","large":"Groot"},"textarea":{"textarea":"Tekstblok","rows":"Rijen","rows_comment":"The number of text rows available for the input before scrolling","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voer placeholder tekst in","serif":"Schreeflettertype","serif_comment":"Gebruik een groter schreeflettertype"},"time":{"time":"Tijd","include_seconds":"Seconden opnemen","include_seconds_comment":"Seconden opnemen in de interface","24hour":"24-uurs klok weergeven","24hour_comment":"Toon de tijd in 24-uurs formaat (bijv: 15:30)"},"switch":{"switch":"Schakelaar","label_on":"Label (Aan)","label_on_comment":"Label om naast de schakelaar te tonen als de schakelaar aan staat","label_off":"Label (Uit)","label_off_comment":"Label om naast de schakelaar te tonen als de schakelaar uit staat","checkbox":"Toon als vinkje","checkbox_comment":"Toon een vinkje in plaats van de standaard schakelaar"},"toggle-icon":{"toggle-icon":"Schakel icoon","text-inactive-name":"Tekst inactief","text-inactive-comment":"Tekst naast het inactief icoon","text-inactive-placeholder":"Voer uw tekst hier in","icon-inactive-name":"Inactief icoon","icon-inactive-comment":"Kies een inactief icoon","color-inactive-name":"Inactief kleur","color-inactive-comment":"Kies de inactieve kleur","text-active-name":"Actieve tekst","text-active-comment":"Tekst naast het actieve icoon","text-active-placeholder":"Voer uw tekst hier in","icon-active-name":"Actief Icoon","icon-active-comment":"Kies een actief icoon","color-active-name":"Actieve kleur","color-active-comment":"Kies de actieve kleur"},"translation":{"translation":"Vertaling","language_field":"Taalveld","language_field_comment":"Het veld dat de taalcode bevat in de gerelateerde collectie","languages":"Talen","template":"Weergavesjabloon","template_comment":"Kies hoe waarden weergegeven moeten worden op de item lay-outs","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"Gebruiker","avatar":"Profielafbeelding","name":"Naam","template":"Sjabloon","template_comment":"How to format the users in the dropdown","placeholder":"Tijdelijke plaatshouder","placeholder_comment":"Voeg een placeholder toe"},"owner":{"owner":"Eigenaar","avatar":"Profielafbeelding","name":"Naam","template":"Sjabloon","template_comment":"How to display the user on the item detail page","display":"Toon","display_comment":"How to display the user on the item browse page","you":"You will be the creator","unknown":"Onbekend"},"user-roles":{"user-roles":"Gebruikersrol","choose_role":"Kies een rol...","relational":"Relationeel","relational_comment":"Opslaan als relationeel record","show_public":"Show public role"},"user-updated":{"user_updated":"Gebruiker bijgewerkt","avatar":"Profielafbeelding","name":"Naam","template":"Sjabloon","template_comment":"How to display the user on the item detail page","display":"Toon","display_comment":"How to display the user on the item browse page","you":"Jij wordt de bewerker","unknown":"Onbekend"},"wysiwyg":{"toolbar":"Werkbalk opties","toolbar_comment":"Toon, verberg en herschik werkbalkopties","custom_formats":"Custom Formats","custom_formats_comment":"Aangepaste HTML wrappers voor content","tinymce_options":"TinyMCE opties","tinymce_options_comment":"Overschrijf een van de [TinyMCE init opties](https://www.tiny.cloud/docs/configure/)."}}}')}}]);
//# sourceMappingURL=lang-interfaces-nl-NL-interfaces-json.0853049a.js.map
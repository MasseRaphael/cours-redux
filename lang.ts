import { Languages } from "./model/language";

export const lang: Languages = {
    en: {
        code: 'en',
        name: 'english',
        h1: 'Welcome',
        p: "Please select a language",
        footer: 'Copyright 2022 - NWS',
        options: [
            {value: 'en', label: 'English'},
            {value: 'fr', label: 'Français'},
        ]
    },
    fr: {
        code: 'fr',
        name: 'français',
        h1: 'Bienvenue',
        p: "Veuillez choisir une langue",
        footer: 'Tous droits réservés 2022 - NWS',
        options: [
            {value: 'en', label: 'Anglais'},
            {value: 'fr', label: 'Français'},
        ]
    },
}
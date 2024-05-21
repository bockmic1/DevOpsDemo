export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "DevOpsDemo FS2024",
            "formList": [
                // bestehende Formulare...
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Willkommen bei DevOps</h4>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "ToDo-List" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "20.05.2024" },
                            "icon": "fa-briefcase",
                            "color": "sun-flower", // Gelbe Farbe
                            "page": "projectsPage",
                            "width": 2,
                            "newRow": true, // Neue Zeile kann je nach Layout benötigt werden oder nicht
                        },
                        {
                            "type": "button",
                            "name": { default: "bockmic1" },
                            "icon": "fa-cog",
                            "color": "amethyst", // Lila Farbe
                            "page": "settingsPage",
                            "width": 2,
                            "newRow": false
                        },
                    ]
                },
                {
                    "id": "toDoPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues ToDo"},
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/todo",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
                // Hier könntest du weitere Seiten hinzufügen für 'projectsPage' und 'settingsPage'
            ]
        }
    };

    get guiModel() {
        return this._guiModel;
    }
}

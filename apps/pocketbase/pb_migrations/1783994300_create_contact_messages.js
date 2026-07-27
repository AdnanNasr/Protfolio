/// <reference path="../database-types.d.ts" />

migrate(
    (app) => {
        const collection = new Collection({
            type: 'base',
            name: 'contact_messages',
            // Public visitors can submit; nobody can read/update/delete via API.
            listRule: null,
            viewRule: null,
            createRule: '',
            updateRule: null,
            deleteRule: null,
            fields: [
                {
                    type: 'text',
                    name: 'name',
                    required: true,
                    max: 200,
                },
                {
                    type: 'email',
                    name: 'email',
                    required: true,
                },
                {
                    type: 'text',
                    name: 'message',
                    required: true,
                    min: 10,
                    max: 5000,
                },
                {
                    type: 'autodate',
                    name: 'created',
                    onCreate: true,
                    onUpdate: false,
                },
            ],
        });

        app.save(collection);
    },
    (app) => {
        const collection = app.findCollectionByNameOrId('contact_messages');
        app.delete(collection);
    }
);

migrate((db) => {
  const collection = new Collection({
    "id": "w08iil0t0jlrupl",
    "created": "2023-06-06 19:43:26.718Z",
    "updated": "2023-06-06 19:43:26.718Z",
    "name": "project_colors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m0txqejm",
        "name": "banner_color",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      },
      {
        "system": false,
        "id": "5bcybdhg",
        "name": "title_color",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      },
      {
        "system": false,
        "id": "zzncn4uq",
        "name": "text_color",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      },
      {
        "system": false,
        "id": "pbtc8ktr",
        "name": "slogan_color",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w08iil0t0jlrupl");

  return dao.deleteCollection(collection);
})

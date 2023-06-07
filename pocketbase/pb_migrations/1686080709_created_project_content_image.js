migrate((db) => {
  const collection = new Collection({
    "id": "wbary9m3vfughfy",
    "created": "2023-06-06 19:45:09.140Z",
    "updated": "2023-06-06 19:45:09.140Z",
    "name": "project_content_image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "stawrrng",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "a64dldyd",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "application/pdf",
            "video/mp4"
          ],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("wbary9m3vfughfy");

  return dao.deleteCollection(collection);
})

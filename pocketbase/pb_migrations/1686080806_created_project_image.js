migrate((db) => {
  const collection = new Collection({
    "id": "vc8ley2mnobu3q9",
    "created": "2023-06-06 19:46:46.902Z",
    "updated": "2023-06-06 19:46:46.902Z",
    "name": "project_image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dw78m3rd",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pdf",
            "video",
            "image"
          ]
        }
      },
      {
        "system": false,
        "id": "uknqlzyc",
        "name": "media",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "application/pdf",
            "video/mp4",
            "image/jpeg",
            "image/png"
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
  const collection = dao.findCollectionByNameOrId("vc8ley2mnobu3q9");

  return dao.deleteCollection(collection);
})

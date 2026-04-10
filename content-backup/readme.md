## Contentful Export Instructions

Documentation: https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/

---

### Configuration

[Generate a content management token](https://www.contentful.com/developers/docs/references/authentication#getting-a-personal-access-token) and replace the following in `config.json`:

```json
{
  "spaceId": "source space id",
  "managementToken": "destination space management token"
}
```

### Perform an Export

Use the `contentful-cli` to create an export:

```cli
npx contentful space export --config config.json
```

# View "list"

## Presentation

This view shows a table with all information passed to it. It can be configured with parameters. Each row of the table stock, in the data attribute, the id of the entity.

## Parameters

All parameters are stock inside the properties `locals` of the response object from Express.

| Parameter   | Description                                                      | Type     | Mandatory |
|-------------|------------------------------------------------------------------|----------|-----------|
| entities    | Represents all data to show inside the table                     | Object[] | Yes       |
| properties  | Represents all fields to show in the table (ex. id and name)     | Object[] | Yes       |
| hideActions | Disable the column action                                        | Boolean  | No        |    
| event       | Message show when an action occurs like create, update or delete | Object   | No        |    
| scripts     | Add new script to the page                                       | String[] | No        |    
| modals      | Add new modal to the page                                        | String[] | No        |    

### Entities

This mandatory parameter must stock all data to display inside the table. It can be the result of a query from the database.

### Properties

All properties must be stocked inside an object which has different keys. Each one must have a name corresponding to the route querying by the user.
In this example, the user request the following url : `/products`. Your object must have a key with the same name following the slash symbol.

```js
const properties = {
    products: [
        {key: 'id', show: 'Identity'},
        {key: 'name', show: 'Name of the product'}
    ]
}
```

This selected key must be an array of object. This is the list of option for one object :

| Property | Decription                                                              | Type   | Mandatory |
|----------|-------------------------------------------------------------------------|--------|-----------|
| key      | Represent one attribute of the entity                                   | String | Yes       |
| show     | Represent the display for the header of the table                       | String | Yes       |
| file     | Override the default display in the cell corresponding to the attribute | String | No        |

### hideActions

This parameter can be set when the view is rendered. It is a boolean type. By default, it has no value. In order to activate it, you must set it to `true`

### Scripts

Same as above, except it require the `public path` to the corresponding javascript script file stock inside an array.

```js
//example:
const scripts = ['/js/script_1.js', '/js/script_2.js']
```

### Modals

Same as above, except it require the `ejs path` to the corresponding view in the `views` directory.

```js
//example
const modals = ['product/modal_1', 'product/modal_2']
```
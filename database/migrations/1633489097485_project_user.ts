import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectUsers extends BaseSchema {
  protected tableName = 'project_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.integer('project_id')
      table.integer('sort_order')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

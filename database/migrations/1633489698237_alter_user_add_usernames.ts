import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUserAddUsernames extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName,(table) => {
      table.string('username').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName,(table) => {
      table.string('username')
    })
  }
}
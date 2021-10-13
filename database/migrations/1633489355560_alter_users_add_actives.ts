import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUserAddActives extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName,(table) => {
      table.integer('active').nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName,(table) => {
      table.dropColumn('active')
    })
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterProjectsDropRows extends BaseSchema {
  protected tableName = 'projects'

  public async down () {
    this.schema.alterTable(this.tableName,(table) => {
      table.string('rowid_')
    })
  }
}

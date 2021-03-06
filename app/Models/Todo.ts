import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  user_id:number

  @column()
  public todo:string

  @column()
  public action_date:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>User)
  public user:BelongsTo<typeof User>
}

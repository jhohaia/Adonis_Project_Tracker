import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Todo from './Todo'
import Project from './Project'

export default class User extends BaseModel {
  static paginate(arg0: any, arg1: number) {
    throw new Error('Method not implemented.')
  }
  @column({ isPrimary: true })
  public id: number

  @column()
  public username:string

  @column()
  public email:string

  @column()
  public password:string

  @column()
  public active:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Profile)
  public profile:HasOne<typeof Profile>

  @hasMany(()=> Todo )
  public todo:HasMany<typeof Todo>

  @manyToMany(()=>Project)
  public project:ManyToMany<typeof Project>
}

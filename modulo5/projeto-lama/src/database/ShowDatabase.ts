import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show): IShowDB => {
        const showDB: IShowDB = {
          id: show.getId(),
          band: show.getBand(),
          startsAt: show.getStartsAt()
        }
    
        return showDB
      }
    
      public findShowByDay = async (date: Date): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
          .connection(ShowDatabase.TABLE_SHOWS)
          .select()
          .where({startsAt: date})
    
        return result[0]
      }
    
      public create = async (show: Show): Promise<void> => {
        const showDB = this.toShowDBModel(show)
    
        await BaseDatabase
          .connection(ShowDatabase.TABLE_SHOWS)
          .insert(showDB)
      }
    
      public getShows = async (): Promise<IShowDB[]> => {
        const result: IShowDB[] = await BaseDatabase
          .connection(ShowDatabase.TABLE_SHOWS)
          .select('*')
    
        return result
      }
}
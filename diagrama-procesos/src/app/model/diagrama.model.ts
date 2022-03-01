import {User} from "../auth/shared/user.model";

export interface Diagrama {
  id?: number,
  user?: User,
  nombre?: string,
  procesos?: any[]
}

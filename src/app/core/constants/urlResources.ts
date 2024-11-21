import { environment } from "../../../environment/environment";

export const urlResources = {
  user: `${environment.apiUrl}/user`,
  getPokemon: (pokemon: string) => `${environment.apiUrl}/pokemon/${pokemon}`,
};
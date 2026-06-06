import type { RouteDefinition } from 'pelelajs'
import { CuadradoView } from './src/cuadrado-view'

export const routes: RouteDefinition[] = [
  { path: '/', component: CuadradoView },
  { path: '*', component: CuadradoView },
]

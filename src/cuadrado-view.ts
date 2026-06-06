function claseAleatoria() {
  const colores = ['red', 'green', 'blue', 'yellow']
  const color = colores[Math.floor(Math.random() * colores.length)]
  return color
}

class Cuadrado {
  clase: string

  constructor() {
    this.clase = claseAleatoria()
  }
}

export class CuadradoView {
  cantidadCuadrados: number = 0
  cuadrados: Cuadrado[] = []

  agregarCuadrado() {
    this.cuadrados.push(new Cuadrado())
  }

  agregarVariosCuadrados() {
    for (let i = 0; i < this.cantidadCuadrados; i++) {
      this.agregarCuadrado()
    }
    this.cantidadCuadrados = 0
  }

  eliminarCuadrado({ cuadrado }: { cuadrado: Cuadrado }) {
    this.cuadrados = this.cuadrados.filter((cuadradoAEliminar) => cuadradoAEliminar !== cuadrado)
  }

  eliminarCuadrados() {
    this.cuadrados = []
  }
}

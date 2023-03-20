class Graph {
  public vertices: object;

  constructor() {
    this.vertices = {};
  }

  addVertex(value: number): void {
    if (!this.vertices[value]) {
      this.vertices[value] = [];
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
      throw new Error("В графе нет таких вершин");
    }

    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push(vertex2);
    }
    if (!this.vertices[vertex2].includes(vertex1)) {
      this.vertices[vertex2].push(vertex1);
    }
  }

  print() {
    console.log(this.vertices);
  }
}

const graph = new Graph();

graph.addVertex(1);

graph.addVertex(2);

graph.addVertex(3);

graph.addEdge(1, 2);

graph.addEdge(1, 3);

graph.print();

const graphMatrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

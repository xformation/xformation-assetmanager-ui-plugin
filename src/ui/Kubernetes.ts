import init from "../domain/KubernetesApp";

export class Kubernetes {
  static templateUrl = "/partials/asset.html";
  constructor() {
    init();
  }
}

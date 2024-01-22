import { MiEtiquetaComponent } from "./mi-etiqueta/mi-etiqueta.component";

export interface MiEtiquetaEventInterface {
    getMessage(): string;
    getTimestamp(): number;
    getTarget(): MiEtiquetaComponent;
}

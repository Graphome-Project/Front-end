import Temas from "./Temas";

interface Postagem{

    id: number;
    titulo: string;
    texto:string;
    midia:string;
    dados:string;
    curtir: number;
    usuario:string;
    temas?: Temas|null

}

export default Postagem;
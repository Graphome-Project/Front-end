import Temas from "./Temas";

interface Postagem {

    id: number;
    titulo: string;
    texto: string;
    midia: string;
    data: string;
    curtir: number;
    temas?: Temas | null

}

export default Postagem;
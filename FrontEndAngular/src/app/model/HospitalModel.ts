import { CategoriaModel } from './CategoriaModel';

export class HospitalModel {
    public idHospital: number
    public nomeHospital: string
    public enderecoHospital: string
    public codigoHospital: string
    public tipoPessoa: number
    public loginHospital: string
    public senhaHospital: string
    public categoria: CategoriaModel[]
}
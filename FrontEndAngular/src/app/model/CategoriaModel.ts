import { HospitalModel } from './HospitalModel'

export class CategoriaModel {
    public idCategoria: number
    public nomeCategoria: string
    public descricaoCategoria: string
    public precoCategoria: number
    public hospital: HospitalModel[]

}
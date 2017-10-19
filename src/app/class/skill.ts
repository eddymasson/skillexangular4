class Skill {
  constructor(
    public id: number,
    public name: string,
    public libelle: string,
    public description: string, 
    public brancheparente : Skill ) { }
}
export {Skill} 
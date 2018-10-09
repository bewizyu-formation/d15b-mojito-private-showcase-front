export class User {
  private _identifiant: string;
  private _password: string;

  constructor(_identifiant?: string, _password?: string){
    this._identifiant = _identifiant;
    this._password = _password;
  }
  get identifiant(): string {
    return this._identifiant;
  }
  set identifiant(value: string) {
    console.log('SET _identifiant', value);
    this._identifiant = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    console.log('SET PASSWORD', value);
    this._password = value;
  }

}

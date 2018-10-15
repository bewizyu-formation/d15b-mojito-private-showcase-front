export class User {
  private _username: string;
  private _password: string;
  private _email: string;
  private _ville: string;

  constructor(_username?: string, _password?: string, _email?: string, _ville?: string) {
    this._username = _username;
    this._password = _password;
    this._email = _email;
    this._ville = _ville;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    console.log('SET _username', value);
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    console.log('SET PASSWORD', value);
    this._password = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }
}

export class User {
  private _username: string;
  private _password: string;
  private _confirmPassword: string;
  private _email: string;
  private _ville: string;
  private _artistName;
  private _description;

  constructor(_username?: string, _password?: string, _confirmPassword?: string, _email?: string,
              _ville?: string, _artistName?: string, _description?: string , ) {
    this._username = _username;
    this._password = _password;
    this._email = _email;
    this._ville = _ville;
    this._artistName = _artistName;
    this._description = _description;
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

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  get artistName() {
    return this._artistName;
  }

  set artistName(value) {
    this._artistName = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }
}

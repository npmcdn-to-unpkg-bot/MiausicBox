import {Band} from './Band'
/**
 * Class that represent the information related to MiausicBox users
 * @class User
 */
export class User{

  private _userName:string;
  private _password:string;
  private _completeName:string;
  private _description:string;
  private _isArtist: boolean;
  private _city:string;
  private _instruments:number[] = [];
  private _bands: Band[] = [];

  constructor(userName:string, password:string, completeName:string,
              description:string, isArtist:boolean, city:string,
              instruments:number[], bands: Band[]){
    this._userName = userName;
    this._password = password;
    this._completeName = completeName;
    this._description = description;
    this._isArtist = isArtist;
    this._city = city;
    this._instruments = instruments;
    this._bands = bands;
  }

  /* Methods Getters & Setters*/
  public get userName():string{
    return this._userName;
  }

  public get password():string{
    return this._password;
  }

  public get completeName():string{
    return this._completeName;
  }

  public get description():string{
    return this._description;
  }

  public get isArtist():boolean{
    return this._isArtist;
  }

  public get instruments(): number[]{
    return this._instruments;
  }

  public get city():string{
    return this._city;
  }

  public set instruments(instrument: number[]){
    this._instruments = instrument;
  }

  public set userName(userName: string){
    this._userName = userName;
  }

  public set password(password: string){
    this._password = password;
  }

  public set completeName(completeName: string){
    this._completeName = completeName;
  }

  public set description(description: string){
    this._description = description
  }

  public set artist(artist:boolean){
    this._isArtist = artist;
  }

  public setCity(city:string){
    this._city = city;
  }

  /** Return if an User is equal to other
    @method equals
    @param {User} User
  */
  equals(object:any){
    //At ApiRest object, this comparaison should be the with both ids
    if (!(object instanceof User)){
      return false;
    }
    else{
      var user:User = object;
      return (user.userName == this.userName);
    }
  }
}

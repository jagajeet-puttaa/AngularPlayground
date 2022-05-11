export interface Profile{
    name : string;
    email : string;
    country : string;
    phone : string
    gender : string;
}

export interface Name{
    title : string;
    first : string;
    last : string;
}

export interface Street{
    number : Number;
    name : string;
}

export interface Coordinates{
    latitude : string;
    longitude: string;
}

export interface Timezone{
    offest : string;
    description : string;
}

export interface Location{
    street : Street;
    city : string;
    state : string;
    country : string;
    postcode : number;
    coordinates : Coordinates;
    timezone : Timezone;
}

export interface Login{
    uuid : string;
    username : string;
    password : string;
    salt : string;
    md5 : string;
    sha1 : string;
    sha256 : string;
}

export interface Dob{
    date : string;
    age : Number;
}

export interface Registered{
    date : string;
    age : Number;
}

export interface Id{
    name : string;
    value : string;
}

export interface Picture{
    large : string;
    medium : string;
    thumbnail : string;
}

export interface Results{
    gender : string;
    name : Name;
    location : Location;
    email : string;
    login : Login;
    dob : Dob;
    registered : Registered;
    phone : string;
    cell : string;
    id : Id;
    picture : Picture;
    nat : string;
}

export interface Info{
    seed : string;
    results : number;
    page : number;
    version: string;
}

export interface UserProfileData{
    results : Results[];
    info : Info;
}


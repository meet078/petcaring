export interface state {
    id: number,
    name: string
}
export interface petowner {
    id: number,
    firstname: string,
    middlename: string,
    lastname: string,
    getfullname: () => string,
    address: string,
    pincode: string,
    state: state,
    email: string,
    phone: string,
    image?: string[]
}

export interface species {
    id: number,
    name: string,
    image?: string,
    description?: string,
}

export interface breed {
    id: number,
    name: string,
    species: species,
    description?: string
}

export interface pet {
    id: number,
    name: string,
    breed: breed,
    description?: string,
    petowner: petowner,
    image?: string[]
}

export interface petorganization {
    id: number,
    name: string,
    address: string,
    breed: breed[],
    email: string,
    phone: string,
    profileimage?: string,
    image?: string[]
}

export interface service{
    id: number,
    name: string
}

export interface petorganization_breed{
    id: number,
    breed: breed,
    price: number,
    hourlycharges: true,
    service: service,
}

export interface pets_transaction{
    id: number,
    pet: pet,
    petorganization: petorganization,
    requestdate: Date
    deliverytimestamp: Date,
    status: number,
    service: petorganization_breed[],
    price: number
}
export interface AccountData {
  name: string;
  lastName: string;
  company: string;
  addressOne: string;
  addressTwo: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
  email: string;
  password: string;
  birthday: Birthday;
}

export interface Birthday {
  day: string;
  month: string;
  year: string;
}

export interface AccountMessages {
  accountCreated: string;
  congratulations: string;
  privileges: string;
}

export interface AccountDeletedMessages {
  accountDeletedTitle: string;
  accountDeletedFirstParagraph: string;
  accountDeletedSecondParagraph: string;
}

export enum Gender {
  Mr = "Mr",
  Mrs = "Mrs",
}

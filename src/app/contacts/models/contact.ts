import { Injectable } from '@angular/core';

// interface
export interface IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
}

// class that implements interface
// model -- ng g cl contacts/model/contact
export class Contact implements IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
}

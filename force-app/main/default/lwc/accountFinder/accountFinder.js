// import { LightningElement } from 'lwc'

// class AccountFinder extends LightningElement {
//     annualRevenue = null

//     handleChange(event) {
//         this.annualRevenue = event.detail.value
//     }

//     reset() {
//         this.annualRevenue = null
//     }
// }

// export default AccountFinder

import { LightningElement, wire } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
export default class AccountFinder extends LightningElement {
    annualRevenue = null;
    handleChange(event) {
        this.annualRevenue = event.detail.value;
    }
    reset() {
        this.annualRevenue = null;
    }
    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;
}
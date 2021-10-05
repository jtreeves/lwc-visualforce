import { LightningElement, wire } from 'lwc'
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber'

class AccountSearch extends LightningElement {
    numberOfEmployees = null

    handleChange(event) {
        this.numberOfEmployees = event.detail.value
    }

    reset() {
        this.numberOfEmployees = null
    }

    @wire(
        queryAccountsByEmployeeNumber, 
        { numberOfEmployees: '$numberOfEmployees' }
    )
    accounts
}

export default AccountSearch
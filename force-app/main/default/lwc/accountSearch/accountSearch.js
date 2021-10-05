import { LightningElement } from 'lwc'

class AccountSearch extends LightningElement {
    numberOfEmployees = null

    handleChange(event) {
        this.numberOfEmployees = event.detail.value
    }

    reset() {
        this.numberOfEmployees = null
    }
}

export default AccountSearch
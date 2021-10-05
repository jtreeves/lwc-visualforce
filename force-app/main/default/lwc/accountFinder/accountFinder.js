import { LightningElement } from 'lwc'

class AccountFinder extends LightningElement {
    annualRevenue = null

    handleChange(event) {
        this.annualRevenue = event.detail.value
    }

    reset() {
        this.annualRevenue = null
    }
}

export default AccountFinder
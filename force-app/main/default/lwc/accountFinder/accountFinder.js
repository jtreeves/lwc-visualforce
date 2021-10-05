import { LightningElement } from 'lwc'

class AccountFinder extends LightningElement {
    annualReview = null

    handleChange(event) {
        this.annualReview = event.detail.value
    }

    reset() {
        this.annualReview = null
    }
}

export default AccountFinder
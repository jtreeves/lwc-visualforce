public with sharing class AccountListControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees) {
        return [
            SELECT Name
            FROM Account
            WHERE NumberOfEmployees >= :numberOfEmployees
        ];
    }
    
    // @AuraEnabled(cacheable=true)
    // public static List<Account> queryAccountsByRevenue(Integer annualRevenue) {
    //     return [
    //         SELECT Name
    //         FROM Account
    //         WHERE NumberOfEmployees >= :numberOfEmployees
    //     ];
    // }
}
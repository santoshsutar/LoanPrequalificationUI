import { BrokenBusinessRule } from "./broken-business-rule";

export class ProductView {
    public Id: string;
    public Name: string;
    public InterestRate: number;
    public MaximumLTV: number;
    public MaximumLoan: number;
    public MaximumLoanTerm: number;

    public GetBrokenRules(): BrokenBusinessRule[] {
        let brokenRules = new Array<BrokenBusinessRule>();
        if (this.Name == null || this.Name.length == 0)
            brokenRules.push(new BrokenBusinessRule("Name", "A product must have a name."));

        if (!this.IsValidInterestRate())
            brokenRules.push(new BrokenBusinessRule("InterestRate", " product's interest rate must be a multiple of 1/4 percent."));

        if (this.MaximumLoanTerm == null || this.MaximumLoanTerm <= 0)
            brokenRules.push(new BrokenBusinessRule("MaximumLoanTerm", " Maximum Loan Term must be a positive number."));

        if (this.MaximumLoan == null || this.MaximumLoan <= 0)
            brokenRules.push(new BrokenBusinessRule("MaximumLoan", " Maximum Loan must be a positive number."));

        if (this.MaximumLTV == null || this.MaximumLTV <= 0)
            brokenRules.push(new BrokenBusinessRule("MaximumLTV", " Maximum Loan to Value must be a positive number."));
        //console.log("fdsadfs"+brokenRules);

        return brokenRules;
    }
    private IsValidInterestRate(): boolean {
        let valid = true;
        if (this.InterestRate == null) {
            valid = false;
        }
        if (this.InterestRate > 0) {
            if (this.InterestRate % 0.125 != 0) {
                valid = false;
            }
        }
        else {
            valid = false;
        }
        return valid;
    }
}
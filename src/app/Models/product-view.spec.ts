import { ProductView } from "./product-view";

describe('productView', () => {
    it("shoud get breaking rules", () => {
        let productView = new ProductView();
        productView.Name = "";
        productView.MaximumLoanTerm = 0;
        productView.MaximumLoan = 0;
        productView.MaximumLTV = 0;
        productView.InterestRate = 0;
        let brokenRules = productView.GetBrokenRules();
        expect(brokenRules.length).toEqual(5);
    });
});
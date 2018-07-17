export class BrokenBusinessRule {
    public Rule: string;
    public Property: string;
    /**
     *
     */
    constructor(property: string, rule: string) {
        this.Property = property;
        this.Rule = rule;
    }
}

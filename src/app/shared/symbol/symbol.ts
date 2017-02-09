export class Symbol {
    constructor(
        public id: Number,
        public name: String,
        public currency: Object,
        public risk_family: Object,
        public issuer: Object,
        public isin: String,
        public region: Object,
        public sector: Object,
        public prices: Array<Object>
        ) {}
}

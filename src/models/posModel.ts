interface Initial {
    value: {
        name: string
    }
}

export class posModel {
    static async getFirst(): Promise<Initial> {
        return { value: { name: "hi" } };
    }
}
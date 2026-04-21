interface Initial {
    value: {
        name: string
    }
}

export class posModel {
    // TODO: Borrar interfaz y lógica hardcodeada una vez definidas las rutas
    static async getFirst(): Promise<Initial> {
        return { value: { name: "hi" } };
    }
}
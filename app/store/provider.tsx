import serverContext from "server-only-context";

export const [grabDatasets, setDatasets] = serverContext<any[]>([]);